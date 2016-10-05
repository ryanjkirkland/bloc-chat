(function() {
	function Room($firebaseArray, $uibModal) {
		var ref = firebase.database().ref().child('rooms');
		var rooms = $firebaseArray(ref);
		var messageRef = firebase.database().ref().child('messages');
		var userRef = firebase.database().ref().child('users');

		//Create new chatroom by updating $firebaseArray

		var createChatRoom = function(room) {
			rooms.$add(room);
		};

		var createUsername = function(username) {
			users.$add(username);
		};

		//Get messages from current room based on roomId

		var getMessages = function(roomId){
			var currentRoomMessages = messageRef.orderByChild("roomId").equalTo(roomId);
			return $firebaseArray(currentRoomMessages);
		};

		var getRoomId = function(roomId){
			return roomId;
		};
		
		return {
			all: rooms,
			createChatRoom: createChatRoom,
			getMessages: getMessages,
			getRoomId: getRoomId
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();