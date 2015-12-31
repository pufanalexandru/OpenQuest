app.controller('questCreationCtrl', ['$scope', function ($scope) {

    $('.colorPicker').colorpicker({ format: 'hex' }); 
    $('#datetimepicker').datetimepicker({ 
        minDate: new Date(),
        format: 'DD/MM/YYYY HH:mm'
    });   
    $('#adventure').bootstrapToggle({
        on: 'Yes',
        off: 'No'
    });
    
    $('#datetimepicker').on('dp.change', function (date) {
        $scope.$apply(function () {
            $scope.quest.deadlineFormatted = date.date._d.toLocaleString();
            $scope.quest.deadline = date.date._d;
        });
    });
    
    $scope.quest = {
        name: '',
        description: '',
        deadline: '',
        category: '',
        hasAdventure: false,
        adventure: ''
    };
    
    $scope.toggleAdventures = function () {
        $scope.quest.hasAdventure = !$scope.quest.hasAdventure;
    };
    
    $scope.createQuest = function () {
        console.log($scope.quest);
    };

}]);