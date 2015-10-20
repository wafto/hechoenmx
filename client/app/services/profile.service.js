'use strict';

import angular from 'angular';

const PROFILE = {
  'id': '1',
  'type': 'organization',
  'category': 'incubator',
  'name': 'Wayra México',
  'latLng': ['19.389109', '-99.155045'],
  'description': 'Somos la aceleradora de empresas más importante de Latinoamérica.',
  'picture_url': 'https://pbs.twimg.com/profile_images/555515905401040896/FdTBA3iG.png',
  'expertise_areas': ['Incubadora', 'Start Ups', 'Mentoría', 'Software', 'Convocatorias', 'Eventos'],
  'address:': 'Avenida Insurgentes Sur 318, Roma Norte, México D.F, 06700',
  'created_at': '2008-11-11',
  'site': 'http://startupweekend.org/',
  'twitter': 'http://twitter.com/startupweeknd',
  'linkedin': 'http://linkedin.com/company/startupweeknd'
};

class ProfileService {
  /*@ngInject*/
  constructor($http) {
    this.http = $http;
  }

  findById() {
    return PROFILE;
  }
}

export default angular
  .module('hemx.services.profile', [])
  .service('profileService', ProfileService);