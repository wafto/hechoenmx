'use strict';

import angular from 'angular';
import SearchHeader from 'common/search.header';
import Collapse from 'common/collapse';
import UserMenu from 'common/user.menu';
import Login from 'common/login';
import Signup from 'common/signup';

export default angular
  .module('hemx.common', [
    SearchHeader.name,
    Collapse.name,
    UserMenu.name,
    Login.name,
    Signup.name
  ]);