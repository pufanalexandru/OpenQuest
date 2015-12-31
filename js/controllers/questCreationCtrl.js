app.controller('questCreationCtrl', ['$scope', function ($scope) {

    $('.colorPicker').colorpicker({ format: 'hex' }); 
    $('#datetimepicker').datetimepicker({ 
        minDate: new Date()
    });   
    $('#adventure').bootstrapToggle({
        on: 'Yes',
        off: 'No'
    });
    
    $scope.quest = {
        deadline: '',
        hasAdventure: false
    };
    
    $scope.toggleAdventures = function () {
        $scope.quest.hasAdventure = !$scope.quest.hasAdventure;
    };
    
    $scope.createQuest = function () {
        console.log('asdsa');
    };
    

}]);