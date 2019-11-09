/************************************************************************/
/************************************************************************/
var options = {
    controls: true,
    width: 640,
    height: 480,
    plugins: {
        record: {
            audio: true,
            video: true,
            maxLength: 150,
            debug: true,
            frameWidth: 480,
            frameHeight: 640
        }
    }
};

// apply some workarounds for certain browsers
applyVideoWorkaround();

var player = videojs('myVideo', options, function() {
    // print version information at startup
    var msg = 'Using video.js ' + videojs.VERSION +
        ' with videojs-record ' + videojs.getPluginVersion('record') +
        ' and recordrtc ' + RecordRTC.version;
    videojs.log(msg);
});

// error handling
player.on('deviceError', function() {
    console.log('device error:', player.deviceErrorCode);
});

player.on('error', function(element, error) {
    console.error(error);
});

// user clicked the record button and started recording
player.on('startRecord', function() {
    console.log('started recording!');
});

// user completed recording and stream is available
player.on('finishRecord', function() {
    // the blob object contains the recorded data that
    // can be downloaded by the user, stored on server etc.
    console.log('finished recording: ', player.recordedData);
});

function resetPlayer(){
  player.record().reset();
}

function uploadVideoFunction(){
    var data = player.recordedData;
    var serverUrl = './upload.php';
    var formData = new FormData();
    var reader = new FileReader();
    reader.onload = function(e){
      formData.append('file', e.target.result);
      formData.append('fname', data.name);
      var http = new XMLHttpRequest();
      http.open('POST', serverUrl, true);
      http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
          console.log(http.responseText);
          resetPlayer();
        }
      }
      console.log(http);
      http.send(formData);
    }
    reader.readAsDataURL(data);
    console.log('uploading recording:', data.name);
}