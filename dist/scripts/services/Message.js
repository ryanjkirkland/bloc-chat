(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child('messages');
		var messages = $firebaseArray(ref);

		return {
			send: function(newMessage) {
				console.log("hitting the service")
				messages.$add(newMessage);
			},
			messages: messages
		};
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();