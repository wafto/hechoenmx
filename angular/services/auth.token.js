(function() {

    'use strict';

    angular
        .module('hechoenmx.services')
        .factory('AuthTokenService', service);

    service.$inject = ['$window'];

    service ($window) {
        var keyname = 'token',
            factory = {};

        function urlBase64Decode(str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
                case 0:
                    break;
                case 2:
                    output += '==';
                    break;
                case 3:
                    output += '=';
                    break;
                default:
                    throw 'Illegal base64url string!';
            }
            return window.atob(output);
        }

        factory.set = function(value) {
            if (value) {
                $window.localStorage.setItem(keyname, value);
            } else {
                this.remove();
            }
        };

        factory.get = function() {
            return $window.localStorage.getItem(keyname);
        };

        factory.remove = function() {
            $window.localStorage.removeItem(keyname);
        };

        factory.has = function() {
            return !! this.get();
        };

        factory.claims = function() {
            var data = {};
            if (this.has()) {
                var encoded = this.get().split('.')[1];
                data = JSON.parse(urlBase64Decode(encoded));
            }
            return data;
        };

        return factory;
    };
    
})();
