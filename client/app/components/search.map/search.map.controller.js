/*global L*/
'use strict';

let debug = require('debug')('SearchMapController');
import mapboxConfig from 'config/mapbox.config';

export default class SearchMapController {
  /*@ngInject*/
  constructor($scope, $state, $attrs, geoService) {
    this.results = [];
    this.state = $state;
    this.markers = null;
    this.geoService = geoService;

    this.map = L.mapbox.map('search-map', mapboxConfig.mapId, {
      zoomControl: false
    }).setView(geoService.latLng, geoService.zoom);

    $attrs.$observe('results', this.onResultsChange.bind(this));
    $scope.$on('geoPositionSuccess', this.setMapView.bind(this));
    this.map.on('zoomend', this.onZoom.bind(this));
    this.map.on('dragend', this.onDragEnd.bind(this));

    new L.Control.Zoom({
      position: 'bottomright'
    }).addTo(this.map);

    this.renderMarkers();
    this.bindEvents();
  }

  bindEvents() {
    let self = this;

    $('body').on('click', '.pin-popup-profile', function(event) {
      let profileId = $(this).closest('.pin-popup').data().id;
      self.state.go('profile', {profileId});
      event.preventDefault();
    });
  }


  onResultsChange(newResults) {
    this.results = JSON.parse(newResults);
    this.renderMarkers();
  }

  renderMarkers() {
    debug('Rendering markerts #renderMarkers');
    let markers = new L.MarkerClusterGroup();

    if (this.markers) {
      this.map.removeLayer(this.markers);
    }

    for (let result of this.results) {
      let marker = this.generateMarker(result);
      let content = this.generateMarkerHTMLContent(result);

      marker.bindPopup(content);
      markers.addLayer(marker);
    }

    this.markers = markers;
    this.map.addLayer(markers);
  }

  generateMarkerHTMLContent({id, 'picture_url':pictureUrl, name, description}) {
    return `
      <div class="pin-popup" data-id="${id}">
        <div class="pin-popup__picture" style="background-image: url('${pictureUrl}')"></div>
        <h1>${name}</h1>
        <p>${description}</p>
        <a href="" class="pin-popup-add">
          <span class="icon-plus"></span> Agregar
        </a>
        <a href="" class="pin-popup-message">
          <span class="icon-message"></span> Mensaje
        </a>
        <a href="" class="pin-popup-profile">
          <span class="icon-info"></span> Perfil
        </a>
      </div>
    `;
  }

  generateIcon(category) {
    return L.divIcon({
      'className': `map-icon map-icon__${category}`,
      'html': `<span class="icon-${category}"></span>`,
      'iconSize': null
    });
  }

  generateMarker(result) {
    let icon = this.generateIcon(result.category);
    return L.marker(result.latLng, {
      icon: icon
    });
  }

  onZoom() {
    let newZoom = this.map.getZoom();
    this.geoService.setZoom(newZoom);
  }

  onDragEnd() {
    let latLng = this.map.getCenter();
    this.geoService.setLatLng(latLng);
  }

  setMapView() {
    this.map.setView(this.geoService.latLng);
  }

  onMarkerClick() {
  }
}