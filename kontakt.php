<html>
<head>	
	<meta charset="utf-8">  
	<title>Kontakt &ndash; Psychologische Praxis Judith Marty</title>
	<meta name="description" content="Kontakt Psychologische Praxis Judith Marty &ndash; Psychologische Praxis in Zürich">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">	
	<link rel="stylesheet" href="assets/normalize.css">
	<link rel="stylesheet" href="assets/milligram.min.css">
	<link rel="stylesheet" href="assets/main.css">
	<style type="text/css">#top-container{background-image: url(assets/silhouette.jpg);background-position: 50% 80%}</style>	
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-SMWX6CRR00"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
	<script src="assets/components.js"></script>
	<script>
	// Google Tag
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', 'G-SMWX6CRR00');

	// navigation
	// when the user clicks on the button, toggle between hiding and showing the dropdown content */
	function myFunction() {
	  document.getElementById("dropdown").classList.toggle("open");
	};

	// Close the dropdown if the user clicks outside of it
	window.onclick = function(event) {
	  if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('open')) {
	        openDropdown.classList.remove('open');
	      }
	    }
	  }
	};

	// jquery
	$(document).ready(function(){		

		// page fade-in efx
		$('#top-container, #content, #footer, #finisher').fadeIn(400);

		// add navigation components and functions 
		$('#navigation').append(navigationComponent);

	    // add footer component
	    $('#footer').append(footerComponent);	    	
	    $('#finisher').append(finisherComponent);
	    $('#cookie-notice-banner').append(cookieNoticeBanner);

		// cookie notice banner
		var currentYear = new Date().getFullYear();
		var cookieNoticed = sessionStorage.getItem('cookie-noticed');
		if (cookieNoticed != currentYear){
			$('#cookie-notice-banner').fadeIn(400);
		};
	    $("#cookie-notice-banner-button").click(function(){
			$('#cookie-notice-banner').fadeOut(400);		
			sessionStorage.setItem('cookie-noticed',currentYear);
		});
	});
	
	</script>
</head>
<body>


<!-- Header -->
<div id="top-container">
	<div class="container">
		<div class="row">			
    		<div class="column" id="logo">
    			<a href="https://www.judith-marty.ch"><img src="assets/psychologische-praxis.svg" width="242"></a>
    		</div>
			<div class="column" id="navigation"></div>
	    </div>
	</div>
	<div class="container">
		<div class="row" id="stage">
	    	<div class="column">
	    		<div id="border">
					<h1>KONTAKT</h1>
				</div>
	    	</div>
		</div>	
	</div>	
</div>


<!-- Content -->
<div id="content" class="kontakt">
	<div class="container">
		<div class="row">
			<div class="column">
				<h3>Kontakt</h3>
				<h4>Judith Marty</h4>
				<p><a href="mailto:judith.marty@hin.ch">judith.marty@hin.ch</a><br>+41 78 704 10 44</p>	
			</div>
			<!--
			<div class="column">
				<h3>Kontaktformular</h3>
				
				<?php
					$empfaenger = 'judith.marty@hin.ch';
					$absender = 'kontaktformular@judith-marty.ch';
					
				    if(isset($_POST['abschicken'])){
				        if(empty($_POST['name'])) $err[] = '<p>Vorname / Name</p>'; 
				        if(empty($_POST['email'])) $err[] = '<p>E-Mail Adresse</p>'; 
				        if(empty($_POST['text'])) $err[] = '<p>Ihre Nachricht</p>'; 
				    	if($_POST['contact_antispam'] != '4' && $_POST['contact_antispam'] != 'vier') $err[] = '<li>Spamschutz</li>';

				        if(!empty($err)) {
				            echo '<div class="alert alert-danger">
				            <p>Bitte korrigieren Sie folgende Fehler</p></div>';
				            foreach($err as $fehler){
				                echo $fehler;
				            }
				        } else {

							$mail_header = "From: www.judith-marty.ch <".$absender.">\r\n"; 
							$mail_header .= "Reply-To: www.judith-marty.ch <".$absender.">\r\n";
							$mail_header .= "X-Sender-IP: ".$_SERVER['REMOTE_ADDR']."\r\n"; 
							$mail_header .= "MIME-Version: 1.0\r\n"; 
							$mail_header .= "Content-Type: text/html; charset=UTF-8;\r\n"; 

				            $mailnachricht = '<html><body>';
				            while(list($feld,$wert)=each($_POST)) {
				                if($feld!="abschicken" && $feld!="contact_antispam") {
				                    $mailnachricht.=ucfirst($feld).": <br>".preg_replace("/(content-type:|bcc:|cc:|to:|from:)/im", "",$wert)."<br><br>";
				                }
				            }
				            $email = preg_replace("/[^a-z0-9 !?:;,.\/_\-=+@#$&\*\(\)]/im", "", $_POST['email']);
				            $email = preg_replace("/(content-type:|bcc:|cc:|to:|from:)/im", "", $email);
				            $mailnachricht.="\nDatum/Zeit: ".date("d.m.Y H:i:s");
				            $mailnachricht.= '</body></html>';
				            mail($empfaenger, "Kontaktformular judith-marty.ch", $mailnachricht,$mail_header); 
				            echo '<div class="alert alert-success"><p>Vielen Dank für Ihre Nachricht.<br>Wir melden uns in Kürze bei Ihnen.</p></div>';
				            $submitted = true;
				        }
				    } 
				    
				    if($submitted != true){ ?>
				        <form role="form" class="well" method="post">
				            <fieldset">
				                <label for="nameField">Vorname Name</label>
				                <input class="form-control" type="text" name="name" value="<?php echo $_POST['name']; ?>">
				                <label>E-Mail</label>
				                <input class="form-control" type="text" name="email" value="<?php echo $_POST['email']; ?>">
				                <label>Telefon <span>[optional]</span></label>
				                <input class="form-control" type="text" name="telefon" value="<?php echo $_POST['telefon']; ?>">
				                <label>Nachricht</label>
				                <textarea class="form-control" rows="5" name="text"><?php echo $_POST['text']; ?></textarea>
				            	<label>Spamschutz: Wie viele Beine hat ein Hund?</label>
				            	<input class="form-control sicherheitsfrage" type="text" value="<?php echo $_POST['contact_antispam']; ?>" name="contact_antispam">
				           		<button class="button-primary" type="submit" name="abschicken" class="btn btn-success btn-block"><i class="fa fa-envelope"></i>Absenden</button>
				        </fieldset">
				    </form>	
				<?php	} ?>
			</div>-->
		</div>
	</div>
</div>


<!-- Footer -->
<div id="footer"></div>
<div id="finisher"></div>
<div id="cookie-notice-banner"></div>
</body>