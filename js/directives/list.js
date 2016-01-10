app.directive('oqList', function () {
    return {
        templateUrl: 'views/directives/list.html',
        scope: {
            title: '@',
            listItems: '='
        }
    };
});