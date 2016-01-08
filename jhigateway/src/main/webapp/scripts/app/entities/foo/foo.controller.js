'use strict';

angular.module('jhigatewayApp')
    .controller('FooController', function ($scope, $state, Foo) {

        $scope.foos = [];
        $scope.loadAll = function() {
            Foo.query(function(result) {
               $scope.foos = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.foo = {
                aaa: null,
                id: null
            };
        };
    });
