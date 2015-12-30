app.controller('questCreationCtrl', ['$scope', function ($scope) {

    $('.colorPicker').colorpicker({ format: 'hex' }); 
    $('#datetimepicker').datetimepicker({ 
        minDate: new Date()
    });   
    
    $scope.quest = {
        deadline: ''
    };
    
    $scope.createQuest = function () {
        console.log('asdsa');
    };
}]);