'use strict';

export default class SearchController {
  /*@ngInject*/
  constructor($stateParams) {
    this.profile = $stateParams.profileId;
  }
}