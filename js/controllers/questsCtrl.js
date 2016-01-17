app.controller('questsCtrl', ['$scope', '$window', 'dataService', function ($scope, $window, dataService) {

    $scope.quests = dataService.quests;
        
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