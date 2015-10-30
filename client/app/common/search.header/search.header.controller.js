'use strict';

export default class SearchHeaderController {
  /*@ngInject*/
  constructor($state) {
    this.state = $state;
    this.query = $state.params.query || '';
  }

  makeSearch() {
    let shouldRefresh = this.state.current.name != 'search';

    this.state.go('search', {
      query: this.query,
      sort: this.state.params.sort || 'closest'
    }, {
      notify: shouldRefresh
    });
  }
}