$(document).ready(function(){
		$('header').height($(window).height()/1.5);
})

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  history.replaceState(null, '', '/bootstrap');
  /*fetch("/bootstrap", {
    method: "GET",
    headers: {
      "Content-type": "text/html",
    },
  })
    .then((response) => history.replaceState(null, '', '/bootstrap');
    .catch((error) => console.error("Error:", error));*/
}

function language(){
	console.log("language");
}

function homePage() {
	history.replaceState(null, '', '/bootstrap');
}