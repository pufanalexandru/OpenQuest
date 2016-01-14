app.filter('questStatus', function () {
    return function (items, status) {
        var results = [];
        
        var checkStatus = function (stat) {
            var filtered = items.filter(function (item) {
                return parseInt(item[stat]);
            });
            results = results.concat(filtered);
        };
        
        for (var prop in status) {
            if (status[prop]) {
                checkStatus(prop);
            }
        }

        return results;
    };
});