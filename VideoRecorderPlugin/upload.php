<?php
	if(isset($_POST['file'])){
		$decodedData = base64_decode(substr($_POST['file'], strpos($_POST['file'], ",") + 1));
		$fname = $_POST['fname'];
		$fp = fopen($fname, 'wb');
		fwrite($fp, $decodedData);
		fclose($fp);
		echo "Upload success!!!";
	}
?>