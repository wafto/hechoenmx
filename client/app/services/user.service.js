'use strict';

class UserService {
  /*@ngInject*/
  constructor(localStorageService, $http) {
    this.user = null;
    this.http = $http;
  }

  login(credentials) {

  }

  logout() {

  }
}