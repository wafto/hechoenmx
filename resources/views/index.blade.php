<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Hecho en Mx</title>
    <meta name="viewport" content="width=device-width initial-scale=1 maximum-scale=1 user-scalable=no">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="description" content="">
    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
    <link rel="stylesheet" href="/assets/app.css">
    <base href="/">
  </head>
  <body ng-class="@{{bodyClass}}" ng-app="hemx" ng-cloak>
    <ui-view></ui-view>
    <script src="/assets/vendor.js"></script>
    <script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.css' rel='stylesheet' />
    <link href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.Default.css' rel='stylesheet' />
    <script src="/assets/app.js"></script>
  </body>
</html>