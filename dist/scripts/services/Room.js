(function() {
	function Room($firebaseArray, $uibModal) {
		var ref = firebase.database().ref().child('rooms');
		var rooms = $firebaseArray(ref);

		var createChatRoom = function(room) {
			rooms.$add(room);
		};

		
		return {
			all: rooms,
			createChatRoom: createChatRoom
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();