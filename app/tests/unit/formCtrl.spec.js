describe("FormCtlr test suite", function() {

    // load the controllers module

    // var scope, $location, createController;

    // beforeEach(inject(function ($rootScope, $controller, _$location_) {
    //     $location = _$location_;
        scope.firstInput = '-71.152432';

    //     createController = function() {
    //         return $controller('formCtrl', {
    //             '$scope': scope
    //         });
    //     };
    // }));

    // it('sample failed test', function() {
    //     var controller = createController();
    //     $location.path('/form');
    //     expect('-71.23456').toBe('YES');
    // });

    beforeEach(module('formController'));

  var $controller, $rootScope;

  beforeEach(inject(function(_$controller_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  describe('test formCtrl', function() {
    it('checks if input is coordinates', function() {
      var $scope = $rootScope.$new();
      var controller = function(){
          return $controller('formCtrl', { $scope: scope }); };
    //   $scope.isCoordinate('-71.152432');
    controller();
      expect(scope.firstInput).toEqual('TRUE');
    });
  });
  });