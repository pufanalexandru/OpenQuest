app.service('data', ['$http', function ($http) {
    var self = this;
    
    self.getData = function () {
        $http.get('backend/getUserData.php?token=' + localStorage['token'])
            .then(function (response) {
                console.log(response);
            });  
    }
        
}]);