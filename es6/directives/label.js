app.directive('oqLabel', ['dataService', function (dataService) {
    return {
        templateUrl: 'views/directives/label.html',
        scope: {
            quest: '='
        },
        link: scope => {
            scope.$watch('quest', () => {
                dataService.categories.forEach(cat => {
                    if (cat.id === scope.quest.category) {
                        scope.cat = cat;
                    }
                });
            }, true);
        }
    };
}]);