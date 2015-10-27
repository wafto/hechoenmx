'use strict';

export default class LoginController {
  /*@ngInject*/
  constructor($scope) {
    this.scope = $scope;
  }

  close() {
    this.scope.$parent.$close();
  }
}