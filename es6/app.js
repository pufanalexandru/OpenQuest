var app = angular.module('openQuest', ['ui.router', 'ngMessages', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'colorpicker.module']);

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
                    return dataService.getData().then(response => {
                        dataService.quests = response.quests || [];
                        dataService.categories = response.categories || [];
                    });
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
        
        .state('main.quests.questDetail', {
            url: '/quests/:id',
            templateUrl: 'views/questDetail.html',
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