app.controller('dashboardCtrl', ['$scope', 'data', function ($scope, data) {
    $scope.categories = data.categories;
    $scope.quests = data.quests;
}]);