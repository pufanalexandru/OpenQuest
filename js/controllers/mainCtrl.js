app.controller('mainCtrl', ['$scope', '$rootScope', 'auth', 'data', function ($scope, $rootScope, auth, data) {
  
    auth.checkToken();   
    $scope.logout = auth.logout;
    
    data.getData().then(function (response) {
        $rootScope.data = response;
    });
    
    $('#menu li').click(function () {
        $('#menu').removeClass('in');
    });
}]);