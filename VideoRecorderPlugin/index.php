<!DOCTYPE html>
<html>
<head>
	<title>Video Recorder Demo</title>
	<link href="dist/css/video-js.min.css" rel="stylesheet">
  	<link href="dist/css/videojs.record.min.css" rel="stylesheet">
	<script src="dist/js/video.min.js"></script>
	<script src="dist/js/recordrtc/RecordRTC.js"></script>
	<script src="dist/js/webrtc-adapter/adapter.js"></script>
	<script src="dist/js/videojs.record.min.js"></script>
	<script src="browser-workarounds.js"></script>

	<style>
	/* change player background color */
	#myVideo {
	    background-color: #000;
	}
	</style>
</head>
<body>
<video id="myVideo" playsinline class="video-js vjs-default-skin" style="width: 100%;">
  <p class="vjs-no-js">
    To view this video please enable JavaScript, or consider upgrading to a
    web browser that
    <a href="https://videojs.com/html5-video-support/" target="_blank">
      supports HTML5 video.
    </a>
  </p>
</video>
<button type="button" style="width: 200px; margin-top: 30px;" onclick="uploadVideoFunction()">Submit to server</button>
<script src="myrecorder.function.js"></script>
</body>
</html>

