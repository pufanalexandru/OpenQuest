app.controller('questCreationCtrl', ['$scope', '$http', 'dataService', 'datePickerService', function ($scope, $http, dataService, datePickerService) {

    $scope.categories = dataService.categories;
    $scope.adventures = [];
        
    $scope.datePicker = datePickerService;
        
    $scope.quest = {};
    $scope.newCategory = {name: ''};
    
    $scope.$watch('newCategory.name', newValue => {
        if (newValue.length > 0) {
            $scope.quest.category = '';
            $scope.categoryError = false;
        } else if ($scope.categories && $scope.categories.length > 0) {
            $scope.quest.category = $scope.categories[0].id;
        }
    });
    
    $scope.createQuest = () => {
        if (!$scope.quest.category && !$scope.newCategory.name) {
            $scope.categoryError = true;
            return;
        }
        
        if ($scope.quest.deadline) {
            $scope.quest.deadline = new Date($scope.quest.deadline).getTime();
        }
        
        let questCreationCallback = () => {
            $scope.createdQuest = true;
            $scope.quest = {};
        };
        
        if ($scope.newCategory.name) {
            if ($scope.newCategory.background) {
                $scope.newCategory.color = parseInt($scope.newCategory.background.replace('#', ''), 16) > 0xffffff / 2 ? '#000' : '#fff';
            }
            dataService.createEntity($scope.newCategory, 'categories', () => {
                $scope.quest.category = dataService.categories[dataService.categories.length - 1].id;
                $scope.newCategory = {name: ''};
                dataService.createEntity($scope.quest, 'quests', questCreationCallback);
            });
        } else {
            dataService.createEntity($scope.quest, 'quests', questCreationCallback);
        } 
           
    };

}]);