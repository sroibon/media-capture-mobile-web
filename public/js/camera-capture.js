(function($) {

	console.log('Working!');

	var successAlert = $('.alert-success');
	var dangerAlert = $('.alert-danger');

	function hasGetUserMedia() {

	  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
	}

	if (hasGetUserMedia()) {

	  successAlert.show();


	} else {

	  dangerAlert.show();

	}

} ($));