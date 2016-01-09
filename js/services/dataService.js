app.service('dataService', ['$http', '$q', function ($http, $q) {
    var self = this;
    
    self.getData = function () {
        var deferred = $q.defer();

        $http.get('backend/getUserData.php?token=' + localStorage['token'])
            .success(function (response) {
                console.log(response);
                deferred.resolve(response);
            })
            .error(function (error) {
                deferred.reject(error);
            });
        
        return deferred.promise; 
    };
    
    self.fetchData = function (callback) {
        self.getData().then(function (response) {
            self.categories = response.categories || [];
            self.quests = response.quests || [];
            if (callback) {
                callback();
            }
        });
    };
     
}]);