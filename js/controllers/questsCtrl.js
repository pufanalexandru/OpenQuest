app.controller('questsCtrl', ['$scope', '$window', '$timeout', 'dataService', function ($scope, $window, $timeout, dataService) {

    $scope.quests = dataService.quests;
    if (!$scope.quests) {
        $timeout(function () {
            $scope.quests = dataService.quests;
        }, 500);
    }
        
    $scope.statuses = ['active'];
    $scope.include = function (status) {
        if ($scope.statuses.indexOf(status) != -1) {
            $scope.statuses.splice($scope.statuses.indexOf(status), 1);
        } else {
            $scope.statuses.push(status);
        }
    };       
    
    if ($window.innerWidth < 580) {
        $scope.collapsed = true;
    }
}]);