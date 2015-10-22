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
      let icon = L.divIcon({
        'className': `map-icon map-icon__${result.category}`,
        'html': `<span class="icon-${result.category}"></span>`,
        'iconSize': null
      });
      let marker = L.marker(result.latLng, {
        icon: icon
      });
      let content = `<h1>${result.name}</h1>`;

      marker.on('click', this.onMarkerClick.bind(this, result));
      marker.bindPopup(content);
      markers.addLayer(marker);
    }
    this.markers = markers;
    this.map.addLayer(markers);
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