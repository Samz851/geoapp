describe("FormCtlr test suite", function() {

  beforeEach(module('formController'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    var controller = $controller('formCtrl', {$scope : $scope});
  }));


  describe("checks if input is coordinate", function(){
    var $scope = {};

    

    $scope.firstInput = '-71.832005';

    $scope.isCoordinate();
    expect($scope.isCoor).toBe(false);
  });
});