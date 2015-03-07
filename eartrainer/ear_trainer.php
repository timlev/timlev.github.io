<?php
    $dir = "sounds";
    $mp3_files = [];
    $lesson = $_GET["lesson"];
	$postlen = count($_POST);
    $lesson_file = $lesson . '_pairs.txt';
    $score = $_POST["current_score"];
    $line = $_POST["line"];
    if ($postlen < 2)
    {
		$score = 0;
		$line = 0;
	}
    $lines = file($lesson_file);
    $lesson_length = count($lines);
    $mp3_files[0] = explode(", ",$lines[$line])[0] . ".mp3";
    $mp3_files[1] = explode(", ",$lines[$line])[1] . ".mp3";
    $wav_files[0] = explode(", ",$lines[$line])[0] . ".wav";
    $wav_files[1] = explode(", ",$lines[$line])[1] . ".wav";

    //Pick a random valid index of $mp3_files
    $random_index = rand(0,count($mp3_files)-1);
?>

<html>
	<link rel="stylesheet" type="text/css" href="stylesheet.css"/>

    <script>
    var trycount = 0;
    function clicked_answer(button)
    {
        var php_random_index = "<?php echo $random_index; ?>";
        var lesson_length = parseInt("<?php echo $lesson_length; ?>");
        var lesson = "<?php echo $lesson; ?>";
        var score = parseInt("<?php echo $score; ?>");
        var line = parseInt("<?php echo $line; ?>");
	document.getElementById("quizscore").innerHTML="QUIZ - Score: " + score.toString() + "/" + (line + 1).toString();

        if ((button == "button0" &&  php_random_index == 0) || (button == "button1" &&  php_random_index == 1))
            {
                if (trycount == 0)
                {
                    score += 1;
                }
                if (line + 1 < lesson_length)
                {
                    document.getElementById("correct").innerHTML="<img src='images/molumen_green_square_submit_icon.png' style='float:center'>Correct!";
                    document.getElementById("quizscore").innerHTML="QUIZ - Score: " + score.toString() + "/" + (line + 1).toString();
					line += 1;
                    document.getElementById("line").value=line;
                    document.getElementById("current_score").value=score;
                    document.getElementById("form").action="ear_trainer.php?lesson=" + lesson;
                    document.getElementById("form").style.visibility="visible";
                }
                else
                {
					document.getElementById("quizscore").innerHTML="QUIZ - Score: " + score.toString() + "/" + (line + 1).toString();
                    document.getElementById("correct").innerHTML="<img src='images/molumen_green_square_submit_icon.png' style='float:center'>Correct! You are finished.";
                    document.getElementById("form").action="index.php";
                    document.getElementById("submit_button").value="Home";
                    document.getElementById("form").style.visibility="visible";
                }
            }
            else
            {
                document.getElementById("correct").innerHTML="<img src='images/molumen_red_square_error_warning_icon.png' style='float:center'>Wrong!";
                trycount += 1;
            }
    }
    </script>
    <script src="jquery-1.7.2.js"/>
    <title><?php echo $lesson; ?></title>
    <body>
	<?php include_once("analyticstracking.php") ?>
	<div id="header">
		<img src="images/paro_AL_LISTEN_.png"/> Welcome to Ear Trainer
	</div>
	<div id="lessons">
		<p><strong>Lessons:</strong></p>
		<?php include "list_lessons.php" ?>
	</div>

	<div class="main">
	        LISTEN
	        <br/>
	        <table>
	            <tr>
                        <td><div id="choice1_text" onclick="text_pressed(1)"><img id="choice1_img" src="images/box-play.png"/><br><?= substr($mp3_files[0],0, -4) ?></div></td>
                	<td><div id="choice2_text" onclick="text_pressed(2)"><img id="choice2_img" src="images/box-play.png"/><br><?= substr($mp3_files[1],0, -4) ?></div></td></tr>
	            <audio id="choice1" ><source src="<?= $dir . '/' . $mp3_files[0] ?>" type="audio/mpeg"><source src="<?= $dir . '/' . $wav_files[0] ?>" type="audio/wav"></audio>
	            <audio id="choice2" ><source src="<?= $dir . '/' . $mp3_files[1] ?>" type="audio/mpeg"><source src="<?= $dir . '/' . $wav_files[1] ?>" type="audio/wav"></audio>
	        </table>

	        <p id="quizscore">QUIZ - Score: <?= $score ?>/ <?= $line + 1 ?> </p>
                <div id="choice3_text" onclick="text_pressed(3)"><img id="choice3_img" src="images/box-play.png"/><br><audio id="choice3"><source src="<?= $dir . '/' . $mp3_files[$random_index] ?>" type="audio/mpeg"><source src="<?= $dir . '/' . $wav_files[$random_index] ?>" type="audio/wav"></audio></div>
                
	        
                
	        <table>
	            <tr>
	                <td><button name="button0" onclick="clicked_answer(this.name)" ><?= substr($mp3_files[0],0, -4) ?></button></td>
	                <td><button name="button1" onclick="clicked_answer(this.name)" ><?= substr($mp3_files[1],0, -4) ?></button></td>
	            </tr>
	        </table>

	        <span id="correct"></span>
	         <!--<a id="next"></a>--> 
                 
	        <form name="form" id="form" action=<?="ear_trainer.php?lesson=" . $lesson ?> method="POST" style="visibility:hidden">
	        <input type="hidden" name="current_score" id="current_score" value="<?= $score?>" />
	        <input type="hidden" name="line" id="line" value="<?= $line + 1 ?>" />
                <div id="sub_button" class="hidden" onclick="submit"><input type="submit" name="submit_button" id="submit_button" value="Next"><img id="next" src="images/go-next.png"/></div>
	        </form>
        
	</div>
        <p>If you cannot hear the sound, your computer or browser doesn't support the sound format.</p>
        <p>Or, you have your speakers turned off :)</p>
    <script>
    $(document).ready(function(){
		console.log("Ready ...");
                //audio.addEventListener("ended",audio.removeClass("playing"));
                //$("#choice1")[0].on("ended",alert("player stopped"));
                //$("#choice1").on("change",alert("change"));
	});
	function text_pressed(cnum){
                var sound = $("#choice" + cnum)[0];
                var text = $("#choice" + cnum + "_text");
                sound.addEventListener("ended",endsound);
                if ($("#choice" + 3)[0].paused == true && $("#choice" + 1)[0].paused == true && $("#choice" + 2)[0].paused == true){;
                    sound.play();
                    text.addClass("playing");
                    $("#choice" + cnum + "_img").attr("src",'images/emblem-paused.png');
                };

                //return text.removeClass("playing");
	};
        
        function endsound(){
            console.log("ended");
            $("#choice" + 1 + "_text").removeClass("playing");
            $("#choice" + 2 + "_text").removeClass("playing");
            $("#choice" + 3 + "_text").removeClass("playing");
            $("#choice1_img").attr("src","images/box-play.png");
            $("#choice2_img").attr("src","images/box-play.png");
            $("#choice3_img").attr("src","images/box-play.png");
        }

    </script>
    </body>
</html>


