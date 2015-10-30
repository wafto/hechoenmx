'use strict';

export default class LoginController {
  /*@ngInject*/
  constructor($scope, $state, userService) {
    this.state = $state;
    this.scope = $scope;
    this.email = '';
    this.password = '';
    this.userService = userService;
  }

  close() {
    this.scope.$parent.$close();
  }

  login() {
    this.userService.login(this.email, this.password).then((error, user) => {
      if (error) return;

      this.close();

      this.state.go('search', {}, {
        reload: true
      });
    });
  }
}