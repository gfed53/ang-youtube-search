(function(){
	angular
	.module('youTube')

	.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider){
	  $httpProvider.defaults.useXDomain = true;
	  delete $httpProvider.defaults.headers.common['X-Requested-With'];

	  $urlRouterProvider.otherwise("/")
	  $stateProvider
	  .state('profile', {
	  	url: "/profile",
	  	templateUrl: "./components/profile/profileView.html",
	  	// controller:
	  })
	  .state('about', {
	  	url: "/about",
	  	templateUrl: "./components/about/aboutView.html"
	  })
	  .state('help', {
	  	url: "/help",
	  	templateUrl: "./components/help/helpView.html"
	  })
	  .state('results', {
	  	url: "/results",
	  	templateUrl: "./components/results/resultsView.html"
	  })
	  .state('video-display', {
	  	url: "/video-display",
	  	templateUrl: "./components/video-display/video-displayView.html"
	  })
	}])
})();