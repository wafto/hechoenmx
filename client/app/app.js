/*global L*/
'use strict';

import mapboxConfig from 'config/mapbox.config';
import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import common from 'common/common';
import components from 'components/components';
import searchService from 'services/search.service';
import geoService from 'services/geo.service';

L.mapbox.accessToken = mapboxConfig.accessToken;

let DEPENDENCIES = [
  uiRouter,
  uiBootstrap,
  components.name,
  common.name,
  searchService.name,
  geoService.name,
  'LocalStorageModule'
];

angular
  .module('hemx', DEPENDENCIES)
  .config( /*@ngInject*/ ($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
  });