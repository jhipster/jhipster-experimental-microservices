 'use strict';

angular.module('jhisecurityApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhisecurityApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhisecurityApp-params')});
                }
                return response;
            }
        };
    });
