app.controller('questCreationCtrl', ['$scope', '$http', 'dataService', function ($scope, $http, dataService) {

    $scope.categories = dataService.categories;
    $scope.adventures = [];
        
    $scope.datePicker = {
        isOpen: false,
        min: new Date(),
        options: {
            'startingDay': 1,
            'show-weeks': false
        },
        timeOptions: { 'show-meridian': false },
        open: function () {
            this.isOpen = true;
        }
    };    
        
    $scope.quest = {};
    $scope.newCategory = {name: ''};
    
    $scope.$watch('newCategory.name', function (newValue) {
        if (newValue.length > 0) {
            $scope.quest.category = '';
            $scope.categoryError = false;
        } else if ($scope.categories && $scope.categories.length > 0) {
            $scope.quest.category = $scope.categories[0].id;
        }
    });
    
    $scope.createQuest = function (isValid) {
        if (!isValid) {
            return;
        }
        
        if (!$scope.quest.category && !$scope.newCategory.name) {
            $scope.categoryError = true;
            return;
        }
        
        if ($scope.quest.deadline) {
            $scope.quest.deadline = new Date($scope.quest.deadline).getTime();
        }
        
        var questCreationCallback = function () {
            $scope.createdQuest = true;
            $scope.quest = {};
        };
        
        if ($scope.newCategory.name) {
            if ($scope.newCategory.background) {
                $scope.newCategory.color = parseInt($scope.newCategory.background.replace('#', ''), 16) > 0xffffff / 2 ? '#000' : '#fff'
            }
            dataService.createEntity($scope.newCategory, 'categories', function () {
                $scope.quest.category = dataService.categories[dataService.categories.length - 1].id;
                $scope.newCategory = {name: ''};
                dataService.createEntity($scope.quest, 'quests', questCreationCallback);
            });
        } else {
            dataService.createEntity($scope.quest, 'quests', questCreationCallback);
        } 
           
    };

}]);