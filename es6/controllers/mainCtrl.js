app.controller('mainCtrl', ['$scope', 'auth', function ($scope, auth) {

    auth.checkToken();
    $scope.logout = auth.logout;

}]);