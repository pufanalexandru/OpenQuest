app.filter('questStatus', function () {
    return (items, statuses) => {
        let results = [];
        
        let checkStatus = (status) => {
            let filtered = items.filter((item) => item.status == status);
            results = results.concat(filtered);
        };
        
        statuses.forEach(checkStatus);
        return results;
    };
});