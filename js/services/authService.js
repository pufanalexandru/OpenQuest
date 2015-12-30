app.service('auth', ['$http', '$state', function ($http, $state) {
    var self = this;
    
    self.checkToken = function () {
        if (!localStorage['token'] || localStorage['token'] == 'LOGGED OUT') {
            $state.go('auth');
        }
        var data = { token: localStorage['token'] };
        $http.post('backend/checkToken.php', data)
            .then(function (response) {
                if (response.data == 'authorized') {
                    console.log('you\'re logged in');
                    $state.go('main');
                } else {
                    console.log('move away scum');
                    $state.go('auth');
                }
            });
    };
    
    self.login = function (loginData, error) {
        $http.post('backend/login.php', JSON.stringify(loginData))
            .then(function (response) {
                if (response.data.indexOf('Ooops') != -1) {
                    error.login = response.data;
                } else {
                    localStorage['token'] = response.data;
                    $state.go('main');
                }
            }, function (error) {
                console.error(error);
            });
    };
    
    self.signup = function (signupData, error, isValid) {
        if (isValid) {
            $http.post('backend/signup.php', JSON.stringify(signupData))
                .then(function (response) {
                    if (response.data == 'error') {
                        error.signup = 'This email is already linked to an account';
                    } else {
                        error.signup = '';
                        error.signupSuccess = response.data;
                    }
                }, function (error) {
                    console.log(error);
                });
        } else {
            error.signup = 'It seems that your data is incorrect';
        }
    };
    
    self.logout = function () {
        localStorage.clear();
        var data = { token: localStorage['token'] };
         $http.post('backend/logout.php', data)
            .then(function (response) {
                $state.go('auth');
            }, function (error) {
                console.error(error);
            });
    };
    
}]);