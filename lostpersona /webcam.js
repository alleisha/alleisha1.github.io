// Access the webcam and display video stream
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    const videoElement = document.getElementById('webcam-video');
    videoElement.srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing webcam:', error);
  });