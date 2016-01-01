app.controller('questCreationCtrl', ['$scope', '$http', 'data', function ($scope, $http, data) {
    $('.colorPicker').colorpicker({ format: 'hex' }); 
    
    $('.colorPicker').on('changeColor', function () {
        $scope.newCategory.color = $('input.colorPicker').val();
    });
    
    $('#datetimepicker').datetimepicker({ 
        minDate: new Date(),
        format: 'YYYY/MM/DD HH:mm'
    });   
    
    $('#datetimepicker').on('dp.change', function () {
        $scope.quest.deadline = $('input#deadline').val();
    });
    
    $('#adventure').bootstrapToggle({
        on: 'Yes',
        off: 'No'
    });
    
    $scope.quest = {
        name: '',
        description: '',
        deadline: '',
        category: '',
        hasAdventure: false,
        adventure: ''
    };
    
    $scope.newCategory = {
        name: '',
        color: ''
    };
    
    $scope.categories = data.categories;
    
    $scope.$watch('newCategory.name', function (newValue) {
        if (newValue.length > 0) {
            $scope.quest.category = '';
            $scope.categoryError = false;
        } else if ($scope.categories && $scope.categories.length > 0) {
            $scope.quest.category = $scope.categories[0].id;
        }
    });
    
    $scope.adventures = [];
    
    $scope.toggleAdventures = function () {
        $scope.quest.hasAdventure = !$scope.quest.hasAdventure;
    };
    
    $scope.createQuest = function () {
        if (!$scope.quest.category && !$scope.newCategory.name) {
            $scope.categoryError = true;
            return;
        }
        
        if ($scope.quest.hasAdventure && !$scope.quest.adventure) {
            $scope.quest.hasAdventure = false;
            $('#adventure').bootstrapToggle('off');  
        }
        
        if (!$scope.quest.hasAdventure) {
            $scope.quest.adventure = "";
        }
        
        $scope.quest.deadline = new Date($scope.quest.deadline);
        if ($scope.quest.deadline == 'Invalid Date') {
            $scope.quest.deadline = '';
        }
        
        var newQuest = {};
        for (var key in $scope.quest) {
            if ($scope.quest[key] && key != 'hasAdventure') {
                newQuest[key] = $scope.quest[key];
            }
        }
        
        var sendData = function () {
            $http.post('backend/createQuest.php?token=' + localStorage['token'], JSON.stringify(newQuest))
                .then(function (response) {
                    console.log(response);
                });
        };
        
        if ($scope.newCategory.name) {
            $scope.newCategory.color = $scope.newCategory.color || '#0B7BB7';
            $http.post('backend/createCategory.php?token=' + localStorage['token'], JSON.stringify($scope.newCategory))
                .then(function (response) {
                    newQuest.category = response.data;
                    sendData();
                });
        } else {
            sendData();
        }             
    };

}]);