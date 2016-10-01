(function() {
	function BlocChatCookies($cookies, $uibModal) {

		var newUser = function(user) {
			$cookies.put('blocChatCurrentUser', user);
		};

		var currentUser = $cookies.get('blocChatCurrentUser');
		
		if (!currentUser || currentUser === '') {
			$uibModal.open({
				templateUrl: '../templates/userPrompt.html',
				controller: 'ModalCtrl',
				controllerAs: 'modal',
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