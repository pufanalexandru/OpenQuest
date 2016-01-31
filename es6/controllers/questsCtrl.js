app.controller('questsCtrl', ['$scope', '$window', '$state', '$stateParams', 'dataService', 'datePickerService', function ($scope, $window, $state,$stateParams, dataService, datePickerService) {

    //variables
    $scope.quests = dataService.quests;
    $scope.categories = dataService.categories;
    $scope.message = $scope.quests.length === 0 ? 'No quests created' : 'Choose a quest from the list';
    $scope.statuses = ['active'];
    $scope.edit = { prop: null, on: null };
    $scope.selectedQuest = $stateParams.id;
    $scope.state = $state;
    $scope.datePicker = datePickerService;
    
    //functions
    $scope.include = status => {
        if ($scope.statuses.indexOf(status) != -1) {
            $scope.statuses.splice($scope.statuses.indexOf(status), 1);
        } else {
            $scope.statuses.push(status);
        }
    };       
    
    $scope.calculateTime = deadline => {
        let now = new Date().getTime();

        if (now > deadline) {
            return 'none';
        }

        let timeLeft = Math.round(Math.abs((now - deadline) / 60000));
        let units = 'minutes';
        if (timeLeft > 1440) {
            timeLeft /= 60 * 24;
            units = 'days';
        } else if (timeLeft > 59) {
            timeLeft /= 60;
            units = 'hours';
        }
        return Math.round(timeLeft) + ' ' + units;
    };
    
    $scope.updateEntity = (type, id, property, value, isValid) => {
        if (isValid !== undefined && !isValid) {
            $scope.edit.prop = false;
            return;
        }
        
        if (property == 'deadline') {
            value = value === undefined ? null : new Date(value).getTime();
        }
        
        dataService.updateEntity(type, id, property, value, () => { $scope.edit.prop = false; });
    };
    
    //logic
    if ($window.innerWidth < 580) {
        $scope.collapsed = true;
    }
    
}]);