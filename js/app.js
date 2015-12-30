var app = angular.module('toDo', ['ui.router', 'ngMessages', 'ngAnimate']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('auth', {
            url: '/',
            templateUrl: 'views/auth.html',
            controller: 'loginCtrl'
        })

        .state('main', {
            url: '/main',
            templateUrl: 'views/main.html',
            controller: 'mainCtrl'
        });
        
    $urlRouterProvider.otherwise('/');
});