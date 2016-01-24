app.directive('oqButtonBar', ['$state', 'dataService', function($state, dataService) {
    return {
        templateUrl: 'views/directives/buttonBar.html',
        scope: {
            quest: '='
        },
        link: scope => {
            scope.deleteCallback = () => {
                $state.go('^');
            };
            
            scope.update = dataService.updateEntity;
            scope.delete = dataService.deleteEntity;
        }
    };
}]);