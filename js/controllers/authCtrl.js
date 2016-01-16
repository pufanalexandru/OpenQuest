app.controller('loginCtrl', ['$scope', 'auth', function ($scope, auth) {   
     
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
    
}]);