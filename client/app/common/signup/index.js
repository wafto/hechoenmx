'use strict';

import angular from 'angular';
import Signup from 'common/signup/signup.component';

export default angular
  .module('user.signup', [])
  .directive('signup', Signup);
