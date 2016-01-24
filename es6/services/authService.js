app.service('auth', ['$http', '$state', function ($http, $state) {
    
    this.checkToken = () => {
        if (!localStorage.token || localStorage.token == 'LOGGED OUT') {
            $state.go('auth');
        }
        $http.post('backend/checkToken.php', localStorage.token)
            .then((response) => {
                if (response.data == 'authorized') {
                    console.log('you\'re logged in');
                } else {
                    $state.go('auth');
                }
            });
    };
    
    this.login = (loginData, error) => {
        $http.post('backend/login.php', JSON.stringify(loginData))
            .then(response => {
                if (response.data.indexOf('Ooops') != -1) {
                    error.login = response.data;
                } else {
                    localStorage.token = response.data;
                    $state.go('main.dashboard');
                }
            }, err => {
                console.error(err);
            });
    };
    
    this.signup = (signupData, error, isValid) => {
        if (!isValid) {
            return;
        }
        
        $http.post('backend/signup.php', JSON.stringify(signupData))
            .then(response => {
                if (response.data == 'error') {
                    error.signup = 'This email is already linked to an account';
                } else {
                    error.signup = '';
                    error.signupSuccess = response.data;
                }
            }, err => {
                console.log(er);
            });
    };
    
    this.logout = () => {
        $http.post('backend/logout.php', localStorage.token)
            .then(() => {
                localStorage.clear();
                $state.go('auth');
            }, err => {
                console.error(err);
            });
    };
    
}]);