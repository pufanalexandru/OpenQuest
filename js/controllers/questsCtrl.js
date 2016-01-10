app.controller('questsCtrl', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.categories = dataService.categories;
        
    $scope.activeQuests = dataService.quests.filter((value) => value.active == "1");
    $scope.finishedQuests = dataService.quests.filter((value) => value.active == "0");
}]);