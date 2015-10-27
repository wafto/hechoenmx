'use strict';

import angular from 'angular';
import Login from 'common/login/login.component';

export default angular
  .module('user.login', [])
  .directive('login', Login);
