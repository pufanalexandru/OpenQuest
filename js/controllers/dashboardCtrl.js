app.controller('dashboardCtrl', ['$scope', 'data', function ($scope, data) {
    $scope.categories = data.categories;
    console.log($scope.categories);
}]);