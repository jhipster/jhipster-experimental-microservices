'use strict';

angular.module('jhigatewayApp')
    .controller('GatewayController', function ($scope, $filter, $interval, GatewayRoutesService) {
        $scope.refresh = function () {
            $scope.updatingRoutes = true;
            GatewayRoutesService.query(function(result) {
                $scope.gatewayRoutes = result;
                $scope.updatingRoutes = false;
            });
        };

        $scope.refresh();

        // refresh the list of services every 2 seconds
        $interval(function(){
            $scope.refresh();
        }.bind(this), 2000);
    });
