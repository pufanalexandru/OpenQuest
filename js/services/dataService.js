app.service('dataService', ['$http', '$q', function ($http, $q) {
    var self = this;
    
    self.getData = function () {
        var deferred = $q.defer();

        $http.get('backend/getUserData.php?token=' + localStorage.token)
            .success(function (response) {
                deferred.resolve(response);
            })
            .error(function (error) {
                deferred.reject(error);
            });
        
        return deferred.promise; 
    };
    
    self.createEntity = function (data, dataType, callback) {
        $http.post('backend/createEntity.php?token=' + localStorage.token + '&table=' + dataType, JSON.stringify(data))
            .then(function (response) {
                self[dataType].push(response.data);
                callback();
            });
    };
    
    self.updateEntity = function (type, id, property, value) {
        var data = {
            type: type,
            id: id,
            column: property,
            value: value
        };
        $http.post('backend/updateEntity.php?token=' + localStorage.token, JSON.stringify(data))
            .then(function () {
                self[type].forEach(function (item) {
                    if (item.id === id) {
                        item[property] = value;
                    }
                })
            });
    };

}]);