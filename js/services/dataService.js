app.service('data', ['$http', '$q', function ($http, $q) {
    var self = this;
    
    self.getData = function () {
        var deferred = $q.defer();

        $http.get('backend/getUserData.php?token=' + localStorage['token'])
            .success(function (response) {
                deferred.resolve(response);
            })
            .error(function (error) {
                deferred.reject(error);
            });
        
        return deferred.promise; 
    };
        
}]);