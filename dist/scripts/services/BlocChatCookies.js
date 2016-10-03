(function() {
	function BlocChatCookies($cookies, $uibModal) {

		var currentUser = $cookies.get('blocChatCurrentUser');
		
		if (!currentUser || currentUser === '') {
			$uibModal.open({
				templateUrl: '../templates/userPrompt.html',
				controller: 'UserCtrl',
				controllerAs: 'user',
				backdrop: 'static',
				keyboard: false
			})
		}

		

		return {
			user: currentUser
		}
	}

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();