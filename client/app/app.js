'use strict';

import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import common from 'common/common';
import components from 'components/components';

let deps = [
  uiRouter, uiBootstrap,
  components.name,
  common.name
];

angular
  .module('hemx', deps)
  .config( /*@ngInject*/ ($urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  });