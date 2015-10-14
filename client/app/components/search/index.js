'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Search from './search.directive';

export default angular
  .module('search', [uiRouter])
  .config( /*@ngInject*/ ($stateProvider) => {
    $stateProvider.state('search', {
      url: '/search',
      template: '<search></search>'
    });
  })
  .directive('search', Search);