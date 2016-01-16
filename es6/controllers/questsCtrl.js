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
        
    $scope.toggle = function () {
        var length = $('#quest-content').css('margin-left') == "31px" ? 230 : 31;
        
        $('#quest-content').animate({ 'margin-left': length });
        $('#quest-sidebar').animate({ 'width': length });
        
        $('#quest-sidebar i').toggleClass('fa-chevron-right');
        $('#quest-sidebar').toggleClass('collapsed');
    };
    
    if ($window.innerWidth < 580) {
        $scope.toggle();
    }
}]);