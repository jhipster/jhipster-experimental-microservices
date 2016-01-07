'use strict';

angular.module('jhirouterApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


