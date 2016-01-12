'use strict';

angular.module('jhigatewayApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('gateway', {
                parent: 'admin',
                url: '/gateway',
                data: {
                    authorities: ['ROLE_ADMIN'],
                    pageTitle: 'gateway.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/admin/gateway/routes.html',
                        controller: 'GatewayController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('gateway');
                        return $translate.refresh();
                    }]
                }
            });
    });
