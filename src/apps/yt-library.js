angular
.module('youTube')
.factory('ytSearchYouTube', [ytSearchYouTube])

function ytSearchYouTube() {

    // $scope.keyword = keyword;
    
    return function(keyword){
    	var url = "https://www.googleapis.com/youtube/v3/search";
    	var request = {
    		key: "AIzaSyBIT2homLIII4fhIFO1ePwQDKA_rm2Ym30",
    		part: "snippet",
    		maxResults: 20,
    		order: "relevance",
    		q: keyword,
    		type: "video",
    		videoEmbeddable: true,
    	};
    	var service = {
    		getResults: getResults
    	};
    	return service;

    	function getResults($http){
    		$http({
    			method: 'GET',
    			url: url,
    			params: request
    		})
    		.then(function(response){
    			var results = response.data.items;
    			return results;
    		},
    		function(response){
    			alert('error');
    		});
    	}
    }
};
