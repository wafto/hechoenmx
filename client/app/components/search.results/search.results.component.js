'use strict';

import template from 'components/search.results/search.results';
import controller from 'components/search.results/search.results.controller';

export default () => {
  return {
    restrict: 'E',
    scope: {
      results: '@'
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};