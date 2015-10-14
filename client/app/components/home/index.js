'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Home from './home.directive';

export default angular
  .module('home', [uiRouter])
  .config( /*@ngInject*/ ($stateProvider) => {
    $stateProvider.state('home', {
      url: '/',
      template: '<home></home>'
    });
  })
  .directive('home', Home);