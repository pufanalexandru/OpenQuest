app.controller('questsCtrl', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.categories = dataService.categories;
    $scope.quests = dataService.quests;
}]);