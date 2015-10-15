'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from 'components/search/search';
import controller from 'components/search/search.controller';

export default angular
  .module('search', [uiRouter])
  .config( /*@ngInject*/ ($stateProvider) => {
    $stateProvider.state('search', {
      url: '/search?query&filters',
      template,
      controller,
      controllerAs: 'vm',
      bindToController: true
    });
  });