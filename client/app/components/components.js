'use strict';

import angular from 'angular';
import home from './home';
import search from './search';

export default angular
  .module('hemx.components', [
    home.name,
    search.name
  ]);