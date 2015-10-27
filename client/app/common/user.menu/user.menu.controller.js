'use strict';

export default class SearchHeaderController {
  /*@ngInject*/
  constructor(UserService, $uibModal, $state) {
    this.state = $state;
    this.uibModal = $uibModal;
    this.UserService = UserService;
    this.isLoggedIn = this.UserService.isLoggedIn;
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
    this.state.go('search', {}, {
      reload: true
    });
  }

  doStuff() {
    console.log(this.UserService.isLoggedIn);
  }
}