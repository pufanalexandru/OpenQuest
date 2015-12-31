app.controller('questCreationCtrl', ['$scope', '$http', 'data', function ($scope, $http, data) {
    $scope.getData = data.getData;
    $scope.getData();

    $('.colorPicker').colorpicker({ format: 'hex' }); 
    
    $('.colorPicker').on('changeColor', function (color) {
        $scope.newCategory.color = $('input.colorPicker').val();
    });
    
    $('#datetimepicker').datetimepicker({ 
        minDate: new Date(),
        format: 'DD/MM/YYYY HH:mm'
    });   
    
    $('#datetimepicker').on('dp.change', function (date) {
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
    
    $scope.$watch('newCategory.name', function (newValue) {
        if (newValue.length > 0) {
            $scope.quest.category = '';
            $scope.categoryError = false;
        } else if ($scope.categories.length > 0) {
            $scope.quest.category = $scope.categories[0];
        }
    });
    
    $scope.categories = [];
    $scope.adventures = ['asdas'];
    
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
        }
        
        if (!$scope.quest.hasAdventure) {
            $scope.quest.adventure = "";
        }
        
        $scope.quest.deadline = new Date($scope.quest.deadline);
        if ($scope.quest.deadline == 'Invalid Date') {
            $scope.quest.deadline = '';
        }
        
        if ($scope.newCategory.name) {
            $scope.newCategory.color = $scope.newCategory.color || '#0B7BB7';
            $http.post('backend/createCategory.php?token=' + localStorage['token'], JSON.stringify($scope.newCategory))
                .then(function (response) {
                    console.log(response);
                })
            
        }
        
        console.log($scope.quest);
        console.log($scope.newCategory);
    };

}]);