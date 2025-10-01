// Navigation Component and Functions

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
          <a href="kontakt.html">Kontakt</a>
  `;

// Navigation dropdown functionality
function myFunction() {
  document.getElementById("dropdown").classList.toggle("open");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("open")) {
        openDropdown.classList.remove("open");
      }
    }
  }
};

// Set active navigation item based on current page
function setActiveMenuItem() {
  // Get current page filename
  var path = window.location.pathname;
  var page = path.split("/").pop();

  // Remove any existing selected classes
  $("#navigation a").removeClass("selected");

  // Add selected class to current page link
  switch (page) {
    case "about.html":
      $("a[href='about.html']").addClass("selected");
      break;
    case "praxis.html":
      $("a[href='praxis.html']").addClass("selected");
      break;
    case "kontakt.html":
      $("a[href='kontakt.html']").addClass("selected");
      break;
    case "psychotherapie.html":
    case "psychologische-beratung-coaching.html":
    case "supervision.html":
    case "selbsterfahrung.html":
    case "workshops.html":
      // For dropdown items, highlight the dropdown button
      $("#angebot").addClass("selected");
      break;
    case "index.html":
    case "":
      // For homepage, don't highlight any menu item
      break;
    default:
      // For any other pages that might be in dropdown
      $("#angebot").addClass("selected");
      break;
  }
}

// Initialize navigation component
function initNavigation() {
  // Add navigation component to DOM
  $("#navigation").append(navigationComponent);

  // Set active menu item
  setActiveMenuItem();
}

// Google Analytics setup
function initGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-SMWX6CRR00");
}

// Vercel Speed Insights setup
function initVercelSpeedInsights() {
  // Initialize Speed Insights queue
  window.si = window.si || function () { 
    (window.siq = window.siq || []).push(arguments); 
  };

  // Dynamically load the Vercel-hosted Speed Insights script
  var script = document.createElement('script');
  script.src = '/_vercel/speed-insights/script.js';
  script.defer = true;
  document.head.appendChild(script);
}

// Cookie notice functionality
function initCookieNotice() {
  var currentYear = new Date().getFullYear();
  var cookieNoticed = sessionStorage.getItem("cookie-noticed");

  if (cookieNoticed != currentYear) {
    $("#cookie-notice-banner").fadeIn(400);
  }

  $("#cookie-notice-banner-button").click(function () {
    $("#cookie-notice-banner").fadeOut(400);
    sessionStorage.setItem("cookie-noticed", currentYear);
  });
}

// Main initialization function
function initPageComponents() {
  // Initialize Google Analytics
  initGoogleAnalytics();
  
  // Initialize Vercel Speed Insights
  initVercelSpeedInsights();

  // Page fade-in effect
  $("#top-container, #content, #footer, #finisher").fadeIn(400);

  // Initialize navigation
  initNavigation();

  // Add footer component
  $("#footer").append(footerComponent);
  $("#finisher").append(finisherComponent);
  $("#cookie-notice-banner").append(cookieNoticeBanner);

  // Initialize cookie notice
  initCookieNotice();
}

// Footer & Finisher Components

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

// Auto-initialize when DOM is ready
$(document).ready(function () {
  initPageComponents();
});
