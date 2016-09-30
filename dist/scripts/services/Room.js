(function() {
	function Room($firebaseArray, $uibModal) {
		var ref = firebase.database().ref().child('rooms');
		var rooms = $firebaseArray(ref);
		var messageRef = firebase.database().ref().child('messages');
		var messages = $firebaseArray(messageRef);

		var createChatRoom = function(room) {
			rooms.$add(room);
		};

		var getMessage = function(message) {
			//messages.$add(message);
		};

		var getMessages = function(roomId){

			var currentRoomMessages = messageRef.orderByChild("roomId").equalTo(roomId);
			return $firebaseArray(currentRoomMessages);

		};

		
		return {
			all: rooms,
			createChatRoom: createChatRoom,
			getMessages: getMessages
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();