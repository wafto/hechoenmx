'use strict';

import angular from 'angular';

const USER = {
  'id': '1231',
  'first_name': 'Salvador',
  'last_name': 'Lopez Mendoza',
  'email': 'simiographics@gmail.com'
};

export default class UserService {
  /*@ngInject*/
  constructor(localStorageService, $http, $rootScope) {
    this.$rootScope = $rootScope;
    this.user = null;
    this.http = $http;
  }

  login() {
    this.user = USER;
  }

  logout() {
    this.user = null;
    this.$rootScope.$apply();
  }

  get isLoggedIn() {
    return this.user ? true : false;
  }
}

export default angular
  .module('hemx.services.user', [])
  .service('UserService', UserService);