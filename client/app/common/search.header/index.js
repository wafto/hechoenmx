'use strict';

import angular from 'angular';
import SearchHeader from './search.header.directive';

export default angular
  .module('search.header', [])
  .directive('searchHeader', SearchHeader);
