app.controller('questsCtrl', ['$scope', '$window', '$state', '$stateParams', 'dataService', function ($scope, $window, $state,$stateParams, dataService) {

    $scope.quests = dataService.quests;
    $scope.message = $scope.quests.length === 0 ? 'No quests created' : 'Choose a quest from the list';
        
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
    $scope.state = $state;
    
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
    
    $scope.snippet =
    'Pretty text with some links:\n'+
    'http://angularjs.org/,\n'+
    'mailto:us@somewhere.org,\n'+
    'another@somewhere.org,\n'+
    'and one more: ftp://127.0.0.1/.';
}]);