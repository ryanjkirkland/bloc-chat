(function() {
	function newChat() {


		return {
			templateUrl: '../templates/directives/newChat.html',
			replace: true,
			restrict: 'E',
			scope: { },
			link: function(scope, element, attributes) {

			}
		};
	}

	angular
		.module('blocChat')
		.directive('newChat', newChat);
})();