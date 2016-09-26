(function() {
	function Room($firebaseArray, $uibModal) {
		var ref = firebase.database().ref().child('rooms');
		var rooms = $firebaseArray(ref);

		this.createChatRoom = function() {
			rooms.$add({name: room});
		};

		

		return {
			all: rooms
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();