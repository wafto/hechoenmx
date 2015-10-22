'use strict';

export default class SearchResultsController {
  /*@ngInject*/
  constructor($state, $attrs) {
    this.state = $state;
    this.results = [];
    $attrs.$observe('results', this.onResultsChange.bind(this));
  }

  onResultsChange(newResults) {
    this.results = JSON.parse(newResults);
  }
}