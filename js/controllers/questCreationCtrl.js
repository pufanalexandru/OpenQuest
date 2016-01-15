app.controller('questCreationCtrl', ['$scope', '$http', 'dataService', function ($scope, $http, dataService) {

    $scope.categories = dataService.categories;
    $scope.adventures = [];

    $('.colorPicker').colorpicker({ format: 'hex' }); 
    
    $('.colorPicker').on('changeColor', function () {
        $scope.newCategory.background = $('input.colorPicker').val();
    });
        
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
        
    $scope.quest = {
        name: '',
        description: '',
        deadline: '',
        category: '',
        adventure: ''
    };
    
    $scope.newCategory = {
        name: '',
        color: '',
        background: ''
    };
    
    $scope.$watch('newCategory.name', function (newValue) {
        if (newValue.length > 0) {
            $scope.quest.category = '';
            $scope.categoryError = false;
        } else if ($scope.categories && $scope.categories.length > 0) {
            $scope.quest.category = $scope.categories[0].id;
        }
    });
    
    $scope.createQuest = function () {
        if (!$scope.quest.category && !$scope.newCategory.name) {
            $scope.categoryError = true;
            return;
        }
        
        if ($scope.quest.deadline) {
            $scope.quest.deadline = new Date($scope.quest.deadline).getTime();
        }

        var newQuest = {};
        for (var key in $scope.quest) {
            if ($scope.quest[key]) {
                newQuest[key] = $scope.quest[key];
            }
        }
        
        var sendData = function () {
            $http.post('backend/createQuest.php?token=' + localStorage.token, JSON.stringify(newQuest))
                .then(function (response) {
                    if (response.data == "success") {
                        $scope.createdQuest = true;
                        $scope.quest = {};
                    }
                });
        };
        
        if ($scope.newCategory.name) {
            $scope.newCategory.background = $scope.newCategory.background || '#0B7BB7';
            $scope.newCategory.color = parseInt($scope.newCategory.background.replace('#', ''), 16) > 0xffffff / 2 ? '#000' : '#fff';
            $http.post('backend/createCategory.php?token=' + localStorage.token, JSON.stringify($scope.newCategory))
                .then(function (response) {
                    console.log(response);
                    newQuest.category = response.data;
                    sendData();
                });
        } else {
            sendData();
        }             
    };

}]);