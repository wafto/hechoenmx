'use strict';

import _ from 'lodash';

const TABS = ['portfolio', 'network'];

export default class SearchController {
  /*@ngInject*/
  constructor($state, $scope, $previousState, profileService) {
    this.enableGoBack = $previousState.get('searchMaked') ? true : false;
    this.state = $state;
    this.profileService = profileService;
    this.loading = true;

    if (_.includes(TABS, $state.params.tab)) {
      this.tab = $state.params.tab;
    } else {
      this.tab = 'profile';
    }

    profileService.findById($state.params.profileId).then((profile) => {
      this.loading = false;
      this.profile = profile;
    });
  }

  changeTab(tab) {
    this.tab = tab;
  }

  goBack() {}
}