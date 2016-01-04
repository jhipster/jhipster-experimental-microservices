'use strict';

angular.module('app1App').controller('FooDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Foo',
        function($scope, $stateParams, $uibModalInstance, entity, Foo) {

        $scope.foo = entity;
        $scope.load = function(id) {
            Foo.get({id : id}, function(result) {
                $scope.foo = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('app1App:fooUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.foo.id != null) {
                Foo.update($scope.foo, onSaveSuccess, onSaveError);
            } else {
                Foo.save($scope.foo, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
