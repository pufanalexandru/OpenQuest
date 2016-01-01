app.controller('mainCtrl', ['$scope', '$rootScope', 'auth', 'data', function ($scope, $rootScope, auth, data) {
  
    auth.checkToken();   
    $scope.logout = auth.logout;
    
    $rootScope.data = {};
    data.getData().then(function (response) {
        $rootScope.data.categories = response.categories || [];
    });
    
    $('#menu li').click(function () {
        $('#menu').removeClass('in');
    });
}]);