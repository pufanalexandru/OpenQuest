app.controller('questsCtrl', ['$scope', '$window', 'dataService', function ($scope, $window, dataService) {
    $scope.categories = dataService.categories;
    $scope.quests = dataService.quests;
        
    $scope.toggle = function () {
        var length = $('#quest-content').css('margin-left') == "31px" ? 250 : 31;
        
        $('#quest-content').animate({ 'margin-left': length });
        $('#quest-sidebar').animate({ 'width': length });
        
        $('#quest-sidebar i').toggleClass('fa-chevron-right');
        $('#quest-sidebar').toggleClass('collapsed');
    };
    
    if ($window.innerWidth < 580) {
        $scope.toggle();
    }
}]);