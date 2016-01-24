app.directive('compareTo', function () {
    return {
        require: 'ngModel',
        scope: {
            otherModelValue: "=compareTo"
        },
        link: (scope, element, attributes, ngModel) => {
            ngModel.$validators.compareTo = modelValue => modelValue == scope.otherModelValue;
            
            scope.$watch('otherModelValue', () => {
                ngModel.$validate();
            });
        }
    };
});