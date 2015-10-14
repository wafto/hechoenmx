'use strict';

export default class SearchHeaderController {
  /*@ngInject*/
  constructor($state, $stateParams) {
    this.$state = $state;
    this.query = $stateParams.query || '';
  }

  makeSearch() {
    this.$state.transitionTo('search', {
      query: this.query
    });
  }
}