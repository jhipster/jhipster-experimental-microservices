'use strict';

angular.module('app1App')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('app1App.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });