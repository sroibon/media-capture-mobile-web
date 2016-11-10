console.log('Working!');


function hasGetUserMedia() {

  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
  console.log('You can use your camera!');
  var successDiv = document.createElement('div');
  successDiv.id = 'success';
  successDiv.className = 'alert alert-success';

  document.getElementsByTagName('body')[0].appendChild(successDiv);


} else {
  console.log('getUserMedia() is not supported in your browser');
}