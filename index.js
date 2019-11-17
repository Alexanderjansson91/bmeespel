function firstclick() {
    location.replace("page2.html")  // navigation till sida två
  }

  function goback() {
    location.replace("index.html") // Gå tillbaka till startsidan
  }

  function settings() {
    location.replace("settings.html") // Gå tillbaka till kontakt
  }

  function about() {
    location.replace("about.html") // Gå tillbaka till om oss
  }

  function family50() {
  location.replace("game50.html") // Gå till spelet för 50 kort för familjen
    }

  function game100() {
    location.replace("game100.html") // Gå till spelet 100 kort för familjen
      }

  function friends100() {
    location.replace("friends100.html") // Gå till spelet 100 kort för vänner
       }

  function vanner50() {
    location.replace("vänner50.html") // Gå till spelet 50 kort för vänner
      }

  function family() {
    location.replace("family.html") //Gå till val av kort sidan för familjfrågor
  }
  function friends() {
    location.replace("friends.html") //Gå till val av kort sidan för vännerfrågor
  }
  function backtoelections() {
    location.replace("page2.html") //tillbaka till sida nummer 2
  }

  function myFunction() {
    alert("Vi har mottagit ditt meddelande"); //Alert som visas efter du har skickat meddelande
    location.replace("index.html")
  }

  function mouseDown() {
    document.getElementById("myP").style.color = "red"; //trycker du på GPS efter att du har godkänt gps:en så blinkar det rött
  }
  
  function mouseUp() {
    document.getElementById("myP").style.color = "green"; //När du trycker på GPS knappen så blir den grön
  }


var x = document.getElementById("bild"); //läser av från Html dokumentet (loggan)

//Skapar en animation för loggan
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("animationstart", myStartFunction);
function myStartFunction(event) {
  this.innerHTML = "The animation-name is: " + event.animationName;
}



var x = document.getElementById("demo");//läser av från Html dokumentet (menyn)
//Skapar en animation för menyn
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("animationstart", myStartFunction);
function myStartFunction(event) {
  this.innerHTML = "The animation-name is: " + event.animationName;
}

var x = document.getElementById("rubrikslide");//läser av från Html dokumentet (Kategorier och Antal kort)
//Skapar en animation för vissa rubriker
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("animationstart", myStartFunction);
function myStartFunction(event) {
  this.innerHTML = "The animation-name is: " + event.animationName;
}



