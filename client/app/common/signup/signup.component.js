'use strict';

import template from 'common/signup/signup';
import controller from 'common/signup/signup.controller';

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