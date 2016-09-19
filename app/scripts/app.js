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
			});
	}

	angular
		.module('blocChat', ['ui.router', 'firebase'])
		.config(config);
})();