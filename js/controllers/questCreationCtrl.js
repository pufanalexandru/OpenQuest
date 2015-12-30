app.controller('questCreationCtrl', ['$scope', function ($scope) {

    $('.colorPicker').colorpicker({ format: 'hex' }); 
    $('#datetimepicker').datetimepicker({ minDate: new Date() });   
    
    $scope.createQuest = function () {
        console.log('asdsa');
    };
}]);