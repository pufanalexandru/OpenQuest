app.directive('oqNavbar', function () {
    return {
        scope: {
            title: '@',
            icon: '@'
        },
        templateUrl: 'views/directives/navbar.html'
    };
});