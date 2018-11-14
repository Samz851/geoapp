describe("FormCtlr test suite", function() {

  beforeEach(module('formController'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    
  }));


  describe("checks if input is coordinate", function(){
    it('should return true on input type', function(){
      var scope = {};
      var controller = $controller('formCtrl', {$scope : scope});

      scope.firstInput = "N49° 59.94913'";
  
      scope.isCoordinate();
      expect(scope.isCoor).toBe(true);
    })
    // var $scope = {};

  });
});