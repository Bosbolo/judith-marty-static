// Navigation

var navigationComponent = `
          <a id="angebot" class="dropbtn" href="javascript:void(0);" onclick="myFunction()">Angebot &#9662;</a>
          <div id="dropdown" class="dropdown-content">
              <a href="psychotherapie.html">Psychotherapie</a>
              <a href="psychologische-beratung-coaching.html">Beratung & Coaching</a>
              <hr>
              <a href="supervision.html">Supervision</a>
              <a href="selbsterfahrung.html">Selbsterfahrung</a>
              <hr>
              <a href="workshops.html">Workshops</a>
            </div> 
          <a href="about.html">About</a>
          <a href="praxis.html">Praxis</a>
          <a href="kontakt.php">Kontakt</a>
  `;

function addClassToactiveMenuItem(){
    // active navigation point
    // 1. HMTL Name auslesen
    var path = window.location.pathname;
    var page = path.split("/").pop();
    // 2. korrekter Link einfärben
    switch (page) {
      case 'about.html':
        $( "a[href='about.html']").addClass('selected')
        break;
      case 'praxis.html':
        $( "a[href='praxis.html']").addClass('selected')
        break;
      case 'kontakt.php':
        $( "a[href='kontakt.php']").addClass('selected')
        break;                                      
    }    
  };    

// Footer & Finisher

var footerComponent = `
  <div class="container">
    <div class="row">
      <div class="column">
        <h5>Adresse</h5>
        <p>Psychologische Praxis<br>Judith Marty<br><a target="_blank" href="https://maps.app.goo.gl/dbHSkVHXjeEvcBWYA">Universitätstrasse 65<br>
        8006 Zürich</a></p>
      </div>
      <div class="column">
        <h5>Kontakt</h5>
        <p><a href="mailto:judith.marty@hin.ch">judith.marty@hin.ch</a>
        <br><a href="tel:+41787041044">+41 78 704 10 44</a>
      </div>
      <div class="column">
        <h5>Angebot</h5>
        <a href="psychotherapie.html">Psychotherapie</a><br>  
        <a href="psychologische-beratung-coaching.html">Psychologische Beratung & Coaching</a><br>
        <a href="supervision.html">Supervision</a> | <a href="selbsterfahrung.html">Selbsterfahrung</a><br>
        <a href="workshops.html">Workshops</a>
      </div>
    </div>
  </div>
  `;  

var finisherComponent = `
  <div class="container">
    <div class="row">   
      <div class="column">
        <p>&#169; 2025 Praxis Judith Marty<a href="datenschutzerklaerung.html">Datenschutzerklärung</a></p>
      </div>        
    </div>
  </div>
  `;    

var cookieNoticeBanner = `
  <div class="container"> 
    <div class="row fadein">
      <div class="column">
        <button id="cookie-notice-banner-button" class="button-primary">Akzeptieren</button>
        <p>Diese Website verwendet Cookies. Mit der Nutzung der Website akzeptieren Sie die Anwendung von Cookies. <a href="datenschutzerklaerung.html">Datenschutzerklärung</a></p>       
      </div>
    </div>
  </div>  
  `;  