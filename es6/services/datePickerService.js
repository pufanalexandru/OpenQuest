app.factory('datePickerService', function() {
    return {
        isOpen: false,
        min: new Date(),
        options: {
            'startingDay': 1,
            'show-weeks': false
        },
        timeOptions: { 'show-meridian': false },
        open() {
            this.isOpen = true;
        }
    }
});