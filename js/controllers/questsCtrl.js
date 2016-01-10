app.controller('questsCtrl', ['$scope', '$window', '$timeout', 'dataService', function ($scope, $window, $timeout, dataService) {

    $scope.quests = dataService.quests;
    if ($scope.quests == undefined) {
        $timeout(function () {
            $scope.quests = dataService.quests;
            $scope.categories = dataService.categories
        }, 1000)
    }
        
    console.log($scope.quests);
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