'use strict';

import angular from 'angular';
import home from './home';
import search from './search';
import profile from './profile';

export default angular
  .module('hemx.components', [
    home.name,
    search.name,
    profile.name
  ]);