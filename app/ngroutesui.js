var app = angular.module('geoappRoutesUI', ['ui.router'])

.config(['$stateProvider','$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

	// Default
	$urlRouterProvider.otherwise("/");
	// var userRole = 'guest';
	


	$stateProvider

		.state('app', {
			url:'/form',
			views: {
				"main": {
					templateUrl: "views/mainForm.html",
					controller: 'formCtrl',
					// controllerAs: 'main',
				}
			},
			data: {
			},
			resolve: {
			}
			
		})

		$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
	}])


