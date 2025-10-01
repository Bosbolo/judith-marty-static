// Navigation dropdown functionality
function myFunction() {
  document.getElementById("dropdown").classList.toggle("open");
}

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', function (event) {
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
});

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
      $("a[href='about.html'], a[href='/about.html']").addClass("selected");
      break;
    case "praxis.html":
      $("a[href='praxis.html'], a[href='/praxis.html']").addClass("selected");
      break;
    case "kontakt.html":
      $("a[href='kontakt.html'], a[href='/kontakt.html']").addClass("selected");
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
  }
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

// Page initialization
$(document).ready(function () {
  // Initialize Vercel Speed Insights
  initVercelSpeedInsights();

  // Page fade-in effect
  $("#top-container, #content, #footer, #finisher").fadeIn(400);

  // Set active menu item
  setActiveMenuItem();

  // Initialize cookie notice
  initCookieNotice();
});
