<h1>Addurl для анализаторов сайта</h1>
<script src="js/jquery-2.0.2.min.js"></script>
<script src="js/script.js"></script>
<link rel="stylesheet" type="text/css" href="css/style.css" />

<?php
	$lines = file('base/base.bd');
	$sites= "";
	foreach ($lines as $line_num => $line) {
		$sites.="'".trim($line)."', ";
	}
?>
<script>
	var sites = [<?=$sites?>];
</script>
<div id="frame_b">
	<iframe src ="" name= "one" scrolling="no" sandbox="allow-same-origin"  id="frame_one"></iframe>
</div>
<div id="added_site">
	<h2>
		Добавленные сайты:
	</h2>
	<div class="addedsite">
	</div>	
	<div class="addedsite">
	</div>	
	<div class="addedsite">
	</div>	
</div>
<a href="javascript:void(0)" id="start">Start</a>