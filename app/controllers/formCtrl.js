angular.module('formController',[])

.controller('formCtrl', ['$scope', function($scope){
    // var app = this;

    // $scope.firstInput = '';

    $scope.coordinate = {
        direction: '',
        location: ''
    }


    $scope.isCoordinate = function(){


        // SAMPLES
        // 50d4m17.698N 14d24m2.826E
        // 40:26:46N,79:56:55W
        // 40:26:46.302N 79:56:55.903W
        // 49°59'56.948"N, 15°48'22.989"E
        // 50d4m17.698N 14d24m2.826E
        // 49.9991522N, 15.8063858E
        // N 49° 59.94913', E 15° 48.38315'
        // 40°26′47″N 79°58′36″W
        // 40d 26′ 47″ N 79d 58′ 36″ W
        // 40.446195N 79.948862W
        // 40,446195° 79,948862°
        // 40° 26.7717, -79° 56.93172
        // 40.446195, -79.948862
        
        const regex = /([SNsn][\s]*)?((?:[\+-]?[0-9]*[\.,][0-9]+)|(?:[\+-]?[0-9]+))(?:(?:[^ms'′"″,\.\dNEWnew]?)|(?:[^ms'′"″,\.\dNEWnew]+((?:[\+-]?[0-9]*[\.,][0-9]+)|(?:[\+-]?[0-9]+))(?:(?:[^ds°"″,\.\dNEWnew]?)|(?:[^ds°"″,\.\dNEWnew]+((?:[\+-]?[0-9]*[\.,][0-9]+)|(?:[\+-]?[0-9]+))[^dm°'′,\.\dNEWnew]*))))([SNsn]?)[^\dSNsnEWew]+([EWew][\s]*)?((?:[\+-]?[0-9]*[\.,][0-9]+)|(?:[\+-]?[0-9]+))(?:(?:[^ms'′"″,\.\dNEWnew]?)|(?:[^ms'′"″,\.\dNEWnew]+((?:[\+-]?[0-9]*[\.,][0-9]+)|(?:[\+-]?[0-9]+))(?:(?:[^ds°"″,\.\dNEWnew]?)|(?:[^ds°"″,\.\dNEWnew]+((?:[\+-]?[0-9]*[\.,][0-9]+)|(?:[\+-]?[0-9]+))[^dm°'′,\.\dNEWnew]*))))([EWew]?)/;
        
        matches = $scope.firstInput.match(regex);
        if (matches > 0) { return 'TRUE' } else { return 'FALSE'};
    }

}])