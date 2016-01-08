'use strict';

angular.module('jhigatewayApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


