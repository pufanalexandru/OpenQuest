app.directive('buttonBar', ['dataService', function(dataService) {
    return {
        templateUrl: 'views/directives/buttonBar.html',
        scope: {
            quest: '='
        },
        link: function (scope) {
            scope.update = dataService.updateEntity;
        }
    };
}]);