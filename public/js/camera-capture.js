console.log('Working!');


function hasGetUserMedia() {

  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
  console.log('You can use your camera!');

} else {
  console.log('getUserMedia() is not supported in your browser');
}