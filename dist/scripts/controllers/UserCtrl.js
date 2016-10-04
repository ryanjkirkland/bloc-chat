(function() {
	function UserCtrl(Room, $cookies, $uibModalInstance) {
		var $ctrl = this;
		this.heavy = "balls";
		var user = Room.users;

		this.userAuth = function() {
			console.log("userAuth is called");

			$ctrl.current === null;

			if ($ctrl.current) {
				currentUser = $cookies.put('blocChatCurrentUser', $ctrl.current);
				$uibModalInstance.dismiss('cancel');
			} else {
				alert("PLZ GIVE NAME");
			}
		};

	}

	angular
		.module('blocChat')
		.controller('UserCtrl', ['Room', '$cookies', '$uibModalInstance', UserCtrl]);
})();