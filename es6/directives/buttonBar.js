app.directive('buttonBar', ['$state', 'dataService', function($state, dataService) {
    return {
        templateUrl: 'views/directives/buttonBar.html',
        scope: {
            quest: '='
        },
        link: function (scope) {
            scope.deleteCallback = function () {
                $state.go('^');
            };
            
            scope.update = dataService.updateEntity;
            scope.delete = dataService.deleteEntity;
        }
    };
}]);