'use strict';

export default class ProfileAboutController {
  /*@ngInject*/
  constructor($state, profileService) {
    this.state = $state;
    this.profileService = profileService;
    this.currentTab = 'followers';

    profileService.getNetworkCountById(this.state.params.profileId).then(networkCount => {
      this.networkCount = networkCount;
    });

    this.fetchFollowers();
  }

  showFollowers() {
    this.currentTab = 'followers';
    this.fetchFollowers();
  }

  showFollowing() {
    this.currentTab = 'following';
    this.fetchFollowing();
  }

  fetchFollowers() {
    this.followers = [];

    this.profileService.getFollowersById(this.state.params.profileId).then(followers => {
      this.followers = followers;
    });
  }

  fetchFollowing() {
    this.following = [];

    this.profileService.getFollowingById(this.state.params.profileId).then(following => {
      this.following = following;
    });
  }
}