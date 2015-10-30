'use strict';

import angular from 'angular';
import Signup from 'common/signup/signup.component';

export default angular
  .module('hemx.modals.signup', [])
  .directive('signup', Signup);
