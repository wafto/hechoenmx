'use strict';

import _ from 'lodash';

const FILTERS = ['incubators', 'calls', 'founding', 'associations', 'training', 'events'];

export default class SearchFunnelsController {
  /*@ngInject*/
  constructor($state) {
    let filters = {};

    this.open = false;
    this.state = $state;

    FILTERS.forEach(filter => filters[filter] = this.isFunnelActive(filter));
    this.filters = filters;
  }

  isFunnelActive(name) {
    if (!this.state.params.filters) return false;

    return _.includes(this.state.params.filters.split('|'), name);
  }

  getFilters() {
    let filters = _.reject(FILTERS, (filter) => {
      return !this.filters[filter];
    });

    return filters.join('|');
  }

  handleFunnel() {
    this.state.go('search', {
      filters: this.getFilters()
    }, {
      notify: false
    });
  }

  openFunnels() {
    this.open = !this.open;
  }

  isAtLeastOneActive() {
    let returnValue = false;

    _.forEach(this.filters, (value, filter) => {
      if (value) {
        returnValue = true;
      }
    });

    return returnValue;
  }
}