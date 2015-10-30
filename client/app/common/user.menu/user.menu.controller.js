'use strict';

export default class SearchHeaderController {
  /*@ngInject*/
  constructor(userService, $uibModal, $state) {
    this.state = $state;
    this.uibModal = $uibModal;
    this.userService = userService;
    this.isLoggedIn = this.userService.isLoggedIn;
  }

  openLoginModal() {
    this.uibModal.open({
      animation: true,
      template: '<login></login>',
      size: 'medium'
    });
  }

  openSignupModal() {
    this.uibModal.open({
      animation: true,
      template: '<signup></signup>',
      size: 'medium'
    });
  }

  logout() {
    this.userService.logout();
    this.state.go('search', {}, {
      reload: true
    });
  }

  doStuff() {
    console.log(this.userService.isLoggedIn);
  }
}