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
        login: ''
    };
    
    $scope.login = auth.login;
    $scope.signup = auth.signup;    
    
    $scope.openModal = () => {
        $uibModal.open({
            templateUrl: 'authModal.html',
            controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
                $scope.close = () => {
                    $uibModalInstance.dismiss();
                }
                $scope.signup = auth.signup;
                $scope.errors = {
                    signup: '',
                    signupSuccess: ''
                };   
            }]
        });
    }; 
}]);