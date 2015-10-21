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
  'linkedin': 'http://linkedin.com/company/startupweeknd',
  'portfolio': [{
    'name': 'Startup Weekend Mexico City @ ITAM',
    'type': 'event',
    'date': 'Viernes 23 al 25, octubre, 2015',
    'description': '¡54 horas llenas de ideas, mentorías, experiencias, amistades, dinámicas, juego y mucho premios!',
    'tags': ['Evento', 'Fin de semana', 'Innovación'],
    'image_url': 'http://i.ytimg.com/vi/cPScUWwP6ec/hqdefault.jpg',
    'more_link': 'https://www.google.com/',
    'upvotes': '9991'
  }, {
    'name': 'Startup Weekend Mexico City @ ITAM',
    'type': 'event',
    'date': 'Viernes 23 al 25, octubre, 2015',
    'description': '¡54 horas llenas de ideas, mentorías, experiencias, amistades, dinámicas, juego y mucho premios!',
    'tags': ['Evento', 'Fin de semana', 'Innovación'],
    'image_url': 'http://i.ytimg.com/vi/cPScUWwP6ec/hqdefault.jpg',
    'more_link': 'https://www.google.com/',
    'upvotes': '9991'
  }, {
    'name': 'Startup Weekend Mexico City @ ITAM',
    'type': 'event',
    'date': 'Viernes 23 al 25, octubre, 2015',
    'description': '¡54 horas llenas de ideas, mentorías, experiencias, amistades, dinámicas, juego y mucho premios!',
    'tags': ['Evento', 'Fin de semana', 'Innovación'],
    'image_url': 'http://i.ytimg.com/vi/cPScUWwP6ec/hqdefault.jpg',
    'more_link': 'https://www.google.com/',
    'upvotes': '9991'
  }],
  'followers': {
    count: '1231',
    list: [{
      'id': '123',
      'name': 'Cúrsame',
      'picture_url': 'https://pbs.twimg.com/profile_images/555515905401040896/FdTBA3iG.png'
    }, {
      'id': '123',
      'name': 'Cúrsame',
      'picture_url': 'https://pbs.twimg.com/profile_images/555515905401040896/FdTBA3iG.png'
    }, {
      'id': '123',
      'name': 'Cúrsame',
      'picture_url': 'https://pbs.twimg.com/profile_images/555515905401040896/FdTBA3iG.png'
    }]
  }
};

class ProfileService {
  /*@ngInject*/
  constructor($http, $q, $timeout) {
    this.q = $q;
    this.timeout = $timeout;
    this.http = $http;
  }

  findById() {
    let deferred = this.q.defer();

    this.timeout(() => {
      deferred.resolve(PROFILE);
    }, 500);

    return deferred.promise;
  }
}

export default angular
  .module('hemx.services.profile', [])
  .service('profileService', ProfileService);