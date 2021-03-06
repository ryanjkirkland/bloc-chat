(function() {
	function ChatroomCtrl(Room, Message, $uibModal, $cookies) {
		var $ctrl = this;
		this.rooms = Room.all;

		this.open = function () {
		  	console.log("open() was called")
		    var modalInstance = $uibModal.open({
		      templateUrl: '../templates/modal.html',
		      controller: "ModalCtrl",
		      controllerAs: "modal"
			});
		};



		this.newChat = function(room) {
			$ctrl.activeRoom = room;
			$ctrl.messages = Room.getMessages(room.$id);
		};

		this.sendMessage = function(room){
					Message.send({
						content: $ctrl.newMessage.content,
						sentAt: Date.now(),
						username: $cookies.get('blocChatCurrentUser'),
						roomId: $ctrl.activeRoom.$id
					})
		};

		this.deleteRoom = function(room) {
			Room.deleteChatRoom(room);
		};

	}

	angular
		.module('blocChat')
		.controller('ChatroomCtrl', ['Room', 'Message', '$uibModal', '$cookies',  ChatroomCtrl]);
})();

// 1.  Grab a controller
// 2.  Install the controller
// 3.  Install a single state using ui-router
// 4.  Connect the state to the controller, to a page
