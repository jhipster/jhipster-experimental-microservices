 'use strict';

angular.module('jhigatewayApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhigatewayApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhigatewayApp-params')});
                }
                return response;
            }
        };
    });
