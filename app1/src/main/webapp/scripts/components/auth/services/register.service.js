'use strict';

angular.module('app1App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


