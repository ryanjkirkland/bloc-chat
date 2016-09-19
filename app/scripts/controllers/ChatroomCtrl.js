(function() {
	function ChatroomCtrl(Room) {
		window.foo = Room.all
		this.rooms = Room.all
	}

	angular
		.module('blocChat')
		.controller('ChatroomCtrl', ['Room', ChatroomCtrl]);
})();

// 1.  Grab a controller
// 2.  Install the controller
// 3.  Install a single state using ui-router 
// 4.  Connect the state to the controller, to a page


