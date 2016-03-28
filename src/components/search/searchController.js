(function(){
	angular
	.module('youTube')
	.controller('SearchCtrl', ['ytSearchYouTube', SearchCtrl]);

	function SearchCtrl(ytSearchYouTube, $sce) {
		vm = this;
		vm.embedUrl = "http://www.youtube.com/embed/";
		vm.trustSrc = trustSrc;
		vm.ytSearchYouTube = ytSearchYouTube;
		console.log(vm.ytSearchYouTube("minecraft"));
	


		function trustSrc(src) {
			return $sce.trustAsResourceUrl(src);
		};
	}
})();