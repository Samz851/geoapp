angular.module('formController',[''])

.controller('formctrl', ['', function(){
    var app = this;

    app.firstInput = '';

    app.coordinate = {
        direction: '',
        location: ''
    }

    app.defineFormat = function (string){
        var isDD = '';
        matches_dd = string.match(/^([-+]?)([\d]{1,2})(((\.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((\.)(\d+))?)$/);
        matches_else = string.match('^\d+$')

        if (matches_dd.length > 0) {
            isDD = 'YES';
        } else if(matches_else.length > 0) {
            isDD = 'NO';
        }
        return isDD;
    }
}])