(function() {

    'use strict';

    angular
        .module('hechoenmx.services')
        .factory('AuthService', service);

    service.$inject = ['$http', 'AuthTokenService'];

    service ($http, AuthTokenService) {
        var factory = {},
            user = null;

        factory.login = function(credentials) {
            return $http.post('/api/auth', credentials)
                .success(function(data) {
                    AuthTokenService.set(data.token);
                    return data;
                });
        };

        factory.logout = function() {
            AuthTokenService.remove();
        };

        factory.refreshUser = function() {
            
        };
        
        return factory;
    };
    
})();
