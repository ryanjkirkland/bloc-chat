(function(){
	function config($stateProvider, $locationProvider){
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
			
		$stateProvider
			.state('chatroom', {
				url: '/',
				controller: 'ChatroomCtrl as chatroom',
				templateUrl: '../templates/chatroom.html'
			})

			.state('modal', {
				url: '/',
				controller: 'ModalCtrl as modal',
				templateUrl: '../templates/modal.html'
			});
	}

	angular
		.module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
		.config(config);
})();