// Code goes here

angular.module('CORSDemo', [])

.config(function($httpProvider){
  $httpProvider.defaults.useXDomain = true;
  
})
.controller('MyController', function($scope, $http, $sce) {
	
  $scope.embedUrl = "http://www.youtube.com/embed/";
		
	$scope.trustSrc = function(src) {
	  return $sce.trustAsResourceUrl(src);
	};

	$scope.searchYouTube = function(keyword) {
			
  	$scope.keyword = keyword;
    
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
    
    $http({
      method: 'GET',
      url: url,
      params: request
    })
    .then(function(response){
      $scope.results = response.data.items;
    },
    function(response){
      alert('error');
    });
	  
  };

});