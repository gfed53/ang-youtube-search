angular
.module('youTube')
.controller('SearchController', [SearchController]);

function SearchController($sce) {
	vm = this;
	vm.embedUrl = "http://www.youtube.com/embed/";
	vm.trustSrc = trustSrc


	function trustSrc(src) {
		return $sce.trustAsResourceUrl(src);
	};
}