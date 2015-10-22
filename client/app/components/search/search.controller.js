'use strict';

export default class SearchController {
  /*@ngInject*/
  constructor($state, $rootScope, $previousState, searchService) {
    this.previousState = $previousState;
    this.searchService = searchService;
    this.state = $state;
    this.results = [];
    this.loading = true;

    if ($state.params.query) {
      this.fetchFromService($state.params.query);
    }

    $rootScope.$on('$locationChangeSuccess', this.onUpdate.bind(this));
  }

  onUpdate() {
    let query = this.state.params.query;
    if (!query) return;
    this.fetchFromService(query);
  }

  fetchFromService(query) {
    this.loading = true;
    this.previousState.memo('searchMaked');

    this.searchService.fetchResults(query).then(results => {
      this.results = results;
      this.loading = false;
    });
  }
}