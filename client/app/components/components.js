'use strict';

import angular from 'angular';
import home from 'components/home';
import search from 'components/search';
import profile from 'components/profile';

export default angular
  .module('hemx.components', [
    home.name,
    search.name,
    profile.name
  ]);