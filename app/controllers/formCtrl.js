angular.module('formController',[''])

.controller('formctrl', ['', function(){
    var app = this;

    app.firstInput = '';

    app.coordinate = {
        direction: '',
        location: ''
    }
}])