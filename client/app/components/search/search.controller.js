/*global L*/
'use strict';

import mapboxConfig from 'config/mapbox.config';

export default class SearchController {
  /*@ngInject*/
  constructor($state, $scope, searchService, geoService) {
    this.geoService = geoService;
    this.searchService = searchService;
    this.state = $state;
    this.map = L.mapbox.map('search-map', mapboxConfig.mapId, {
      zoomControl: false
    }).setView(geoService.latLng, geoService.zoom);
    this.results = [];

    new L.Control.Zoom({
      position: 'bottomright'
    }).addTo(this.map);

    if ($state.params.query) {
      this.results = searchService.fetchResults($state.params.query);
    }

    this.renderMarkers();

    this.map.on('zoomend', this.onZoom.bind(this));
    this.map.on('dragend', this.onDragEnd.bind(this));
    $scope.$on('geoPositionSuccess', this.setMapView.bind(this));
    $scope.$on('$locationChangeSuccess', this.onUpdate.bind(this));
  }

  onUpdate() {
    let query = this.state.params.query;
    if (!query) return;

    this.results = this.searchService.fetchResults(query);
    this.renderMarkers();
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

  renderMarkers() {
    let markers = new L.MarkerClusterGroup();

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

    this.map.addLayer(markers);
  }

  onMarkerClick(result) {
    console.log(result);
  }
}