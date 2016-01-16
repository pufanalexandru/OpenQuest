app.filter('questStatus', function () {
    return function (items, statuses) {
        var results = [];
        
        var checkStatus = function (status) {
            var filtered = items.filter(function (item) {
                return item.status == status;
            });
            results = results.concat(filtered);
        };
        
        statuses.forEach(checkStatus);
        return results;
    };
});