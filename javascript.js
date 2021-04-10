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

// Aici este script-ul pentru butonul de login!
function loginButton() {
  setTimeout(
    function() {
      document.getElementById("demo").innerHTML = "Loading";
  }, 1000);
  setTimeout(
    function() {
      document.getElementById("demo").innerHTML = "Please";
  }, 2000);
  setTimeout(
    function() {
      document.getElementById("demo").innerHTML = "Wait";
  }, 3000);

  setTimeout(
    function() {
      document.getElementById("demo").innerHTML = "LOGIN";
      // window.location.href = 'pages/404/index.html'
      var txt;
      var person = prompt("Please enter your key:", "");
      if(person == null || person == "") return;
      if(person == `5ZxvVidfYK84s3zYDgO0sAlfj7TLyvVRgB6DfpkWAsaW58nmHGKBVeTMGqKnICIg`) {
        document.getElementById("demo").innerHTML = "Accepted";
        setTimeout(
          function() {
            document.getElementById("demo").innerHTML = "LOGIN";
            window.location.href = 'pages/developers/index.html'
        }, 5000);
      } else {
        document.getElementById("demo").innerHTML = "Declined";
        setTimeout(
          function() {
            document.getElementById("demo").innerHTML = "LOGIN";
        }, 5000);
      }
      // document.getElementById("demo").innerHTML = txt;
  }, 5000);
}

// Aici este script-ul pentru butonul de go up!
function loadTop() {
  setTimeout(
    function() {
      document.body.scrollTo({top: 0, behavior: 'smooth'}); // For Safari
      document.documentElement.scrollTo({top: 0, behavior: 'smooth'}); // For Chrome, Firefox, IE and Opera
  }, 100);
}

// Aici este script-ul pentru butonul de chat!
function chatBox() {
  console.log('The mesaje box has been executed!')
  var txt;
  if (confirm(`Our website is not ready yet! Do you want to close this page?`)) {
    window.location.href = 'index.html'
  } else {
    window.location.href = 'pages/404/index.html'
  }
  document.getElementById("demo").innerHTML = txt;
  setTimeout(
    function() {
      window.location.href = 'pages/404/index.html'
  }, 100);
}