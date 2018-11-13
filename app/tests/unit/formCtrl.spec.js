describe("FormCtlr test suite", function() {

    // load the controllers module

    describe('determine the format from input string', function() {
        it('matches the coordinate string format to DD or the others', function() {
          // your test assertion goes here
          var scope = {};
          var ctrl;
          inject(function($controller){
              ctrl = $controller('formCtrl', {$scope:scope});
          })
          expect('40.714').toEqual('YES');
        });
      });
  });