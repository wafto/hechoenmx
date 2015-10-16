'use strict';

import angular from 'angular';
import SearchHeader from 'common/search.header';
import Collapse from 'common/collapse';

export default angular
  .module('hemx.common', [
    SearchHeader.name,
    Collapse.name
  ]);