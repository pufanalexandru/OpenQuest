app.directive('compareTo', function () {
    return {
        require: 'ngModel',
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function (scope, element, attributes, ngModel) {
            ngModel.$validators.compareTo = (modelValue) => modelValue == scope.otherModelValue;
            
            scope.$watch('otherModelValue', function () {
                ngModel.$validate();
            });
        }
    };
});