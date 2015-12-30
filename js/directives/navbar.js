app.directive('oqNavbar', function () {
    return {
        scope: {
            title: '@title',
            icon: '@icon'
        },
        templateUrl: 'views/directives/navbar.html'
    };
});