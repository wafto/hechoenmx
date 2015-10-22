'use strict';

export default class SearchController {
  /*@ngInject*/
  constructor($state, $scope, $previousState, profileService) {
    this.enableGoBack = $previousState.get('searchMaked') ? true : false;
    this.state = $state;
    this.profileService = profileService;

    profileService.findById($state.params.profileId).then((profile) => {
      this.profile = profile;
    });
  }
}