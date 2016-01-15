var app = angular.module('openQuest', ['ui.router', 'ngMessages', 'ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('auth', {
            url: '/',
            templateUrl: 'views/auth.html',
            controller: 'loginCtrl'
        })

        .state('main', {
            abstract: true,
            url: '/main',
            templateUrl: 'views/main.html',
            controller: 'mainCtrl',
            resolve: { 
                getData: ['dataService', function (dataService) {
                    if (!dataService.quests) {
                        dataService.fetchData();
                    }
                }]
            }
        })

        .state('main.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardCtrl'
        })

        .state('main.quests', {
            url: '/quests',
            templateUrl: 'views/quests.html',
            controller: 'questsCtrl'
        })

        .state('main.adventures', {
            url: '/adventures',
            templateUrl: 'views/adventures.html'
        })
        
        .state('main.questCreation', {
            url: '/questCreation',
            templateUrl: 'views/questCreation.html',
            controller: 'questCreationCtrl'
        })
        
        .state('main.adventureCreation', {
            url: '/adventureCreation',
            templateUrl: 'views/adventureCreation.html'
        })

        .state('main.settings', {
            url: '/settings',
            templateUrl: 'views/settings.html'
        });
        
    $urlRouterProvider.otherwise('/main/dashboard');
}]);