app.controller('dashboardCtrl', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.categories = dataService.categories;
    $scope.quests = dataService.quests;
}]);