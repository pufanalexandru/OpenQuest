app.directive('oqEditable', function() {
    return {
        restrict: 'A',
        link: (scope, element, attrs) => {

            element
                .on('mouseenter', () => {
                    element.append('<em class="editable"> edit <i class="fa fa-pencil-square-o"></i></em>');
                    
                    element.find('em').on('click', () => {
                        alert('hi');
                    });
                
                })
                .on('mouseleave', () => {
                    element.find('em').remove();
                });
        }
    };
});