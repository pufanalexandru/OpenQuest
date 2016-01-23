app.controller('loginCtrl', ['$scope', '$uibModal', 'auth', function ($scope, $uibModal, auth) {   
     
    $scope.loginData = {
        email: '',
        password: ''
    };
    
    $scope.signupData = {
        email: '',
        password: '',
        repeatPassword: ''
    };
  
    $scope.errors = {
        login: '',
        signup: '',
        signupSuccess: ''
    };
    
    $scope.login = auth.login;
    $scope.signup = auth.signup;    
    
    $scope.openModal = () => {
        $uibModal.open({
            templateUrl: 'authModal.html',
            controller: 'loginCtrl'
        });
    };
    
}]);