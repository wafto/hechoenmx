/*global L*/
'use strict';

import mapboxConfig from 'config/mapbox.config';

export default class SearchController {
  /*@ngInject*/
  constructor($state, $scope, $previousState, searchService, geoService) {
    this.markers = null;
    this.previousState = $previousState;
    this.geoService = geoService;
    this.searchService = searchService;
    this.state = $state;
    this.map = L.mapbox.map('search-map', mapboxConfig.mapId, {
      zoomControl: false
    }).setView(geoService.latLng, geoService.zoom);
    this.results = [];
    this.loading = true;
    new L.Control.Zoom({
      position: 'bottomright'
    }).addTo(this.map);

    if ($state.params.query) {
      $previousState.memo('searchMaked');
      searchService.fetchResults($state.params.query).then(results => {
        this.results = results;
        this.loading = false;
        this.renderMarkers();
      });
    }

    this.map.on('zoomend', this.onZoom.bind(this));
    this.map.on('dragend', this.onDragEnd.bind(this));
    $scope.$on('geoPositionSuccess', this.setMapView.bind(this));
    $scope.$on('$locationChangeSuccess', this.onUpdate.bind(this));
  }

  onUpdate() {
    let query = this.state.params.query;

    if (!query) return;
    this.results = [];
    this.loading = true;
    this.previousState.memo('searchMaked');
    this.searchService.fetchResults(query).then(results => {
      this.results = results;
      this.loading = false;
      this.renderMarkers();
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

  renderMarkers() {
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

  onMarkerClick(result) {
  }

  goToProfile(result) {
    this.state.go('profile', {
      profileId: result.id
    });
  }
}