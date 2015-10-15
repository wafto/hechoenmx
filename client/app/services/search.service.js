'use strict';

let RESULTS = [{
  id: "1",
  name: 'Wayra México',
  latLng: ['19.389109', '-99.155045'],
  description: 'Somos la aceleradora de empresas más importante de Latinoamérica.',
  picture_url: 'https://pbs.twimg.com/profile_images/555515905401040896/FdTBA3iG.png'
}, {
  id: "2",
  name: 'Retos Públicos',
  latLng: ['19.401739', '-99.119167'],
  description: 'Retos Públicos es una estrategia de la CEDN que invitar a los emprendedores del país a proponer y desarrollar soluciones para problemas del Gobierno Federal.',
  picture_url: 'http://amiti.org.mx/wp-content/uploads/2014/08/retos_publicos.png'
}, {
  id: "3",
  name: 'Wayra México',
  latLng: ['19.423434', '-99.169121'],
  description: 'Somos la aceleradora de empresas más importante de Latinoamérica.',
  picture_url: 'https://pbs.twimg.com/profile_images/555515905401040896/FdTBA3iG.png'
}, {
  id: "4",
  name: 'Retos Públicos',
  latLng: ['19.373887', '-99.128094'],
  description: 'Retos Públicos es una estrategia de la CEDN que invitar a los emprendedores del país a proponer y desarrollar soluciones para problemas del Gobierno Federal.',
  picture_url: 'http://amiti.org.mx/wp-content/uploads/2014/08/retos_publicos.png'
}];

class SearchService {
  /*@ngInject*/
  constructor($http) {
    this.http = $http;
  }

  fetchResults(query) {
    return RESULTS;
  }
}

export default angular
  .module('hemx.services.search', [])
  .service('searchService', SearchService);