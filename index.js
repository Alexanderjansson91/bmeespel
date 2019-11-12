function firstclick() {
    location.replace("page2.html")  // navigation till sida två
  }

  function goback() {
    location.replace("index.html") // Gå tillbaka till startsidan
  }

  function settings() {
    location.replace("settings.html") // Gå tillbaka till inställningar
  }

  function about() {
    location.replace("about.html") // Gå tillbaka till om oss
  }

  function family50() {
  location.replace("game50.html") // Gå till spelet
    }

  function game100() {
    location.replace("game100.html") // Gå till spelet
      }

  function friends100() {
    location.replace("friends100.html") // Gå till spelet
       }

  function vanner50() {
    location.replace("vänner50.html") // Gå till spelet
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
  function send() {
    alert("The form was submitted");
  }

  function myFunction() {
    alert("Vi har mottagit ditt meddelande");
    location.replace("page2.html")
  }

  function mouseDown() {
    document.getElementById("myP").style.color = "red";
  }
  
  function mouseUp() {
    document.getElementById("myP").style.color = "green";
  }

 
  var x = document.getElementById("bild");

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction);

// Standard syntax
x.addEventListener("animationstart", myStartFunction);

function myStartFunction(event) {
  this.innerHTML = "The animation-name is: " + event.animationName;
}



var x = document.getElementById("demo");

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction);

// Standard syntax
x.addEventListener("animationstart", myStartFunction);

function myStartFunction(event) {
  this.innerHTML = "The animation-name is: " + event.animationName;
}

  