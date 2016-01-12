'use strict';

angular.module('jhigatewayApp')
    .controller('GatewayController', function ($scope, $filter, GatewayRoutesService) {
        $scope.refresh = function () {
            $scope.updatingRoutes = true;
            GatewayRoutesService.query(function(result) {
                $scope.gatewayRoutes = result;
                $scope.updatingRoutes = false;
            });
        };

        $scope.refresh();
    });
