app.controller('questCreationCtrl', ['$scope', function ($scope) {

    $('.colorPicker').colorpicker({format: 'hex'}); 
    $('#datetimepicker').datetimepicker();
    
    $scope.createQuest = function () {
        console.log('asdsa');
    }
}]);