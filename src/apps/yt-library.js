(function(){
	"use strict";
	angular
	.module('youTube')
	.factory('ytSearchYouTube', ['$q', '$http', ytSearchYouTube])

	function ytSearchYouTube($q, $http) {
		return function(keyword){
		    // $scope.keyword = keyword;  
		    var url = "https://www.googleapis.com/youtube/v3/search";
		    var request = {
		    	key: "AIzaSyDKNIGyWP6_5Wm9n_qksK6kLSUGY_kSAkA",
		    	part: "snippet",
		    	maxResults: 20,
		    	order: "relevance",
		    	q: keyword,
		    	type: "video",
		    	videoEmbeddable: true,
		    };
		    var services = {
		    	getResults: getResults
		    };
		    // Why is this running on load? 
		    console.log("searching: "+keyword);
		    return services;

		    function getResults(){
		    	console.log("is working");
		    	$http({
		    		method: 'GET',
		    		url: url,
		    		params: request
		    	})
		    	.then(function(response){
		 			console.log("working");
		    		// return $q.when(response);
		    		// var results = response.data.items;
		    		console.log(response);
		    	},
		    	function(response){
		    		alert('error');
		    	});
		    }
		}
	};
})();
