app.service('dataService', ['$http', '$q', function ($http, $q) {
    
    // GET DATA
    this.getData = () => {
        let deferred = $q.defer();

        $http.get(`backend/getUserData.php?token=${localStorage.token}`)
            .success(response => {
                deferred.resolve(response);
            })
            .error(error => {
                deferred.reject(error);
            });
        
        return deferred.promise; 
    };
    
    // CREATE ANYTHING
    this.createEntity = (data, dataType, callback) => {
        $http.post(`backend/createEntity.php?token=${localStorage.token}&table=${dataType}`, JSON.stringify(data))
            .then(response => {
                this[dataType].push(response.data);
                callback();
            })
    };
    
    // UPDATE ANYTHING
    this.updateEntity = (type, id, property, value) => {
        let data = { type, id, property, value };
        $http.post(`backend/updateEntity.php?token=${localStorage.token}`, JSON.stringify(data))
            .then(() => {
                this[type].forEach(item => {
                    if (item.id === id) {
                        item[property] = value;
                    }
                })
            });
    };
    
    // DELETE ANYTHING
    this.deleteEntity = (type, id, callback) => {
        if (!confirm('Are you sure?')) {
            return;
        }

        let data = { type, id: id };
        $http.post(`backend/deleteEntity.php?token=${localStorage.token}`, JSON.stringify(data))
            .then(() => {
                this[type].forEach((item, index) => {
                    if (item.id === id) {
                        this[type].splice(index, 1);
                    }
                })
                callback();
            });
    };

}]);