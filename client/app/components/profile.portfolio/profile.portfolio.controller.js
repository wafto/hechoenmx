'use strict';

export default class ProfileAboutController {
  /*@ngInject*/
  constructor($state, profileService) {
    let profileId = $state.params.profileId;
    profileService.getPortfolioById(profileId).then(portfolio => {
      this.portfolio = portfolio;
    });
  }
}