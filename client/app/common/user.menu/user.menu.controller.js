'use strict';

export default class SearchHeaderController {
  /*@ngInject*/
  constructor(UserService, $uibModal) {
    this.uibModal = $uibModal;
    this.UserService = UserService;
    this.isLoggedIn = this.UserService.isLoggedIn;

    this.openSignupModal();
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
    this.UserService.logout();
  }

  doStuff() {
    console.log(this.UserService.isLoggedIn);
  }
}