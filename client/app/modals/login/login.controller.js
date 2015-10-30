'use strict';

export default class LoginController {
  /*@ngInject*/
  constructor($scope, $state, $uibModalInstance, userService) {
    this.modal = $uibModalInstance;
    this.state = $state;
    this.email = '';
    this.password = '';
    this.userService = userService;
  }

  login() {
    this.userService.login(this.email, this.password).then((error) => {
      if (error) return;

      this.modal.close();

      this.state.go('search', {}, {
        reload: true
      });
    });
  }
}