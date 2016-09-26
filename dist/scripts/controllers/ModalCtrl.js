(function() {
	function ModalCtrl(Room, $uibModalInstance) {
		this.heavy = "balls";

		this.why = function(){
			console.log("this click registers");
			$uibModalInstance.dismiss('cancel');
		};

	}

	angular
		.module('blocChat')
		.controller('ModalCtrl', ['Room','$uibModalInstance', ModalCtrl]);
})();