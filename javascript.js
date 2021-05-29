mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction(), scrollBackground()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.style.opacity = '100%';
  } else {
    mybutton.style.opacity = '0%';
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
  const html = document.querySelector('.chat');
  if (html.style.opacity == 0) {
    html.style.opacity  = '100%';
    html.style.top = '370px'
    html.style.left = '-50px'
    html.style.padding = '180px'
    // padding: 10%;
  } else {
    html.style.opacity  = '0%';
    html.style.top = '100%'
    html.style.padding = '0px'
    // padding: 10%;
  }
}

function sendMessage() {
  var x = document.getElementById("textbax").value;
  document.getElementById("sended").innerText += 'ADMIN - ' + x;
  setTimeout(
    function() {
      document.getElementById("sended").innerText = ''
  }, 1500);
}

// function scrollBackground() {
//   const html1 = document.querySelector('html');
//   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//     html1.style.backgroundImage = "url('images/tumblr_226484df357757565ded83f4155a58b2_b04a6978_1280.gif')"
//   } else {
//     html1.style.backgroundImage = "url('images/854183.jpg')"
//   }
// }

function webMode() {
  if(document.getElementById("webmode").innerText === 'LIGHT MODE') {
    const panel = document.querySelector('.main_panel');
    panel.style.color = 'white'

    document.getElementById("webmode").innerHTML = "DARK MODE";
  } else {
    const panel = document.querySelector('.main_panel');
    panel.style.color = 'black'

    document.getElementById("webmode").innerHTML = "LIGHT MODE";
  }
}

function mainLogoClick() {
  const panel = document.querySelector('.main_panel');
  const logo = document.querySelector('.main_logo');
  const html = document.querySelector('html');
  const navigationbar = document.querySelector('ul');
  if (panel.style.opacity == 0) {
    panel.style.opacity  = '100%';
    panel.style.top = '40%';
    panel.style.height = '500%';
    logo.style.top = "10%";
    logo.style.opacity = '100%';
    navigationbar.style.opacity = '100%';
    navigationbar.style.top = "30%";
    html.style.backgroundImage = "url('images/854183.jpg')"
  } else {
    panel.style.opacity  = '0%';
    panel.style.top = '100%';
    panel.style.height = '0px';
    logo.style.top = "35%";
    logo.style.opacity = '60%';
    navigationbar.style.top = "55%";
    navigationbar.style.opacity = '35%';
    html.style.backgroundImage = "url('images/tumblr_226484df357757565ded83f4155a58b2_b04a6978_1280.gif')"
  }
}