/*global L*/
'use strict';

global.aliadaDebug = require('debug');
global.aliadaDebug.enable('*');

import mapboxConfig from 'config/mapbox.config';
import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import common from 'common/common';
import components from 'components/components';
import searchService from 'services/search.service';
import profileService from 'services/profile.service';
import geoService from 'services/geo.service';
import userService from 'services/user.service';
import onboardingService from 'services/onboarding.service';

L.mapbox.accessToken = mapboxConfig.accessToken;

let DEPENDENCIES = [
  uiRouter,
  uiBootstrap,
  components.name,
  common.name,
  searchService.name,
  geoService.name,
  profileService.name,
  userService.name,
  onboardingService.name,
  'ngNotify',
  'ct.ui.router.extras',
  'angularMoment',
  'LocalStorageModule'
];

angular
  .module('hemx', DEPENDENCIES)
  .config( /*@ngInject*/ ($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
  });