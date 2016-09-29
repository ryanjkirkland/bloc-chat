(function() {
	function ModalCtrl(Room, $uibModalInstance) {
		var $ctrl = this;
		this.heavy = "balls";

		this.cancel = function(){
			console.log("this click registers");
			$uibModalInstance.dismiss('cancel');
		};

		this.createRoom = function(){
			Room.createChatRoom($ctrl.newChatRoom);
			$ctrl.newChatRoom = {}
			$uibModalInstance.dismiss('cancel');
		};

	}

	angular
		.module('blocChat')
		.controller('ModalCtrl', ['Room','$uibModalInstance', ModalCtrl]);
})();