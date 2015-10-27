'use strict';

import template from 'common/login/login';
import controller from 'common/login/login.controller';

export default () => {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};