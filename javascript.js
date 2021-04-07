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
  document.body.scrollTo({top: 0, behavior: 'smooth'}); // For Safari
  document.documentElement.scrollTo({top: 0, behavior: 'smooth'}); // For Chrome, Firefox, IE and Opera
}

function myFunction() {
  document.getElementById("demo").innerHTML = "OPENING";
  setTimeout(
    function() {
      document.getElementById("demo").innerHTML = "LOGIN";
      window.location.href = 'pages/404/index.html'
  }, 1000);
}

function loadTop() {
  setTimeout(
    function() {
      document.body.scrollTo({top: 0, behavior: 'smooth'}); // For Safari
      document.documentElement.scrollTo({top: 0, behavior: 'smooth'}); // For Chrome, Firefox, IE and Opera
  }, 100);
}