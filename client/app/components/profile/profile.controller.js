'use strict';

export default class SearchController {
  /*@ngInject*/
  constructor($state, profileService) {
    this.profileService = profileService;
    this.profile = profileService.findById($state.params.profileId);
  }

  goBack() {}
}