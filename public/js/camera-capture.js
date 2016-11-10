console.log('Working!');

var successAlert = $('.alert-success');
var dangerAlert = $('.alert-danger');

function hasGetUserMedia() {

  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
  console.log('You can use your camera!');

  successAlert.show();


} else {
  console.log('getUserMedia() is not supported in your browser');
  dangerAlert.show();

}