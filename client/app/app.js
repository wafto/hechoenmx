'use strict';

import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import common from 'common/common';
import components from 'components/components';

let DEPENDENCIES = [
  uiRouter,
  uiBootstrap,
  components.name,
  common.name
];

angular
  .module('hemx', DEPENDENCIES)
  .config( /*@ngInject*/ ($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
  });