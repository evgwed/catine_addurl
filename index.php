<html>
<head>
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
</head>
<body>
    <div class="body_b">
        <h1 class="logo">Бесплатный сервис прогона сайтов по сайтам-анализаторам</h1>
        <a href="http://catine.ru/" target="_blank" class="copyright">Разработано Catine.ru</a>
        <div id="frame_b">
            <iframe src ="none.html" name= "one" scrolling="no" sandbox="allow-same-origin" seamless id="frame_one"></iframe>
            <input name="site_url" id="site_url" type="text" value="" placeholder="Введите сайт для прогона" />
            <p class="descript_url">Пример ввода сайта: google.ru</p>

            <!--<fieldset class="switch">
                <label class="off">Выкл<input type="radio" class="on_off" name="off" value="off"/></label>
                <label class="on">Вкл<input type="radio" class="on_off" name="on" value="on"/></label>
            </fieldset>-->
            <div class="swich_b">
                <div class="off_b">&nbsp;</div>
                <div class="on_b">&nbsp;</div>
            </div>
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
    </div>
</body>
</html>