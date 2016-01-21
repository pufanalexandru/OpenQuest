app.controller('questsCtrl', ['$scope', '$window', '$stateParams', 'dataService', function ($scope, $window, $stateParams, dataService) {

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
    
    $scope.selectedQuest = $stateParams.id;
    
    $scope.calculateTime = function (deadline) {
        var now = new Date().getTime();
        
        if (now > deadline) {
            return 'none';
        }
        
        var timeLeft = Math.round(Math.abs((now - deadline) / 60000));
        var units = 'minutes';
        if (timeLeft > 1440) {
            timeLeft /= 60 * 24;
            units = 'days';
        } else if (timeLeft > 59) {
            timeLeft /= 60;
            units = 'hours';
        }
        return Math.round(timeLeft) + ' ' + units;
    }
}]);