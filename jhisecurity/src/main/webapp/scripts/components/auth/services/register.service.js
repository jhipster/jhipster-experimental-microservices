'use strict';

angular.module('jhisecurityApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


