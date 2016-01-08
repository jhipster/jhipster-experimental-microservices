'use strict';

angular.module('jhigatewayApp')
    .controller('FooDetailController', function ($scope, $rootScope, $stateParams, entity, Foo) {
        $scope.foo = entity;
        $scope.load = function (id) {
            Foo.get({id: id}, function(result) {
                $scope.foo = result;
            });
        };
        var unsubscribe = $rootScope.$on('jhigatewayApp:fooUpdate', function(event, result) {
            $scope.foo = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
