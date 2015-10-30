'use strict';

export default class SearchResultsController {
  /*@ngInject*/
  constructor($state, $attrs, modalsService, networkService) {
    this.networkService = networkService;
    this.modalsService = modalsService;
    this.state = $state;
    this.results = [];
    $attrs.$observe('results', this.onResultsChange.bind(this));
  }

  onResultsChange(newResults) {
    this.results = JSON.parse(newResults);
  }

  handleMessage({id, name}) {
    this.modalsService.message({id, name});
  }

  handleAddUser(id, name) {
    this.networkService.add({id, name});
  }
}