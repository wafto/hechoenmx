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
  constructor(localStorageService, $q, $timeout, $http) {
    this.user = null;
    this.http = $http;
    this.q = $q;
    this.timeout = $timeout;
  }

  login(email, password) {
    let deferred = this.q.defer();

    this.timeout(() => {
      if (password == 'admin') {
        this.user = USER;
        deferred.resolve(null, USER);
      } else {
        deferred.resolve(new Error('Bad credentials'), null);
      }
    }, 500);

    return deferred.promise;
  }

  logout() {
    this.user = null;
  }

  get isLoggedIn() {
    return this.user ? true : false;
  }
}

export default angular
  .module('hemx.services.user', [])
  .service('userService', UserService);