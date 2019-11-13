var startPosLat;
var startPosLong;

 var numbers = [
    'legalisera cannabis?',
    'tillåta prostution?',
    'förbjuda Sprit över 30%?',
    'få köra båt med 0.8 promillei blodet?', 'Tillåta kokain på krogar?',
    'förbjuda rasistiska partier?',]; //En array med frågor

  function addfraga () { // En funktion som ger startPosLat och startPosLong ett värde
 
  console.log(startPosLat);
  if(startPosLat < 59.315028 &&  startPosLong > 17.989388 && startPosLat > 59.299376 && startPosLong < 18.029594)
  //if(startPosLat < 60.057612 &&  startPosLong > 17.478959 && startPosLat > 60.00324 && startPosLong < 17.610694)
  {
    numbers = numbers.concat([
      "Ha fet jävla rejv fest i kungsträdgården?",
      "Tillåta fotbollsfans slås mot varandra efter en match på en angiven plats i stockholm?",
      "ha en graffitivägg på slottet i stockholm?",
    ]);
    }

    
    if(startPosLat < 60.057612 &&  startPosLong > 17.478959 && startPosLat > 60.00324 && startPosLong < 17.610694)
    {
      numbers = numbers.concat([
        "Ha dyrare alkohol på nationspubar, för att minska konkurransen?",
        "göra uppsala stad 100% bilfritt?",
        "få konsumera alkohol på uppsalas gator 30 April?",
      ]);
      }
  };


  var clicks = 0;
  function spin() //onclick funktion spin

  {
    
    clicks += 1;
    document.getElementById("antal").innerHTML = clicks;

    if (numbers.length == 0) //Om spelet är klart visas en "alert"
    {
      alert ("Spelet är klart");
  
      location.replace("page2.html"); //När man väljer stäng så kommer man tillbaka till valsidan
      generateNumbers();
  
    }



    //Randomerar Frågorna max en gång per runda
    var rand = Math.floor(Math.random() * numbers.length);
    var num = numbers[rand];
    numbers.splice(rand, 1); //ställer in så att allting bara randomeras en gång
    
    document.getElementById("number").innerHTML = num;

   
    //Ljud vid button click
    var audio = document.getElementById("audio");
    audio.play();
    
  }
  
  function mute() {
    var x = document.getElementById("audio");
    x.muted = true;  //Mute funktion
  
  }
  
  function soundon() {
    var x = document.getElementById("audio");
    x.muted = false; //ljud på funktion
  }
  
  function scaleUp(obj, size) {
    obj.style.fontSize = size; //scale up ljud av/öjud på knappen
  }
  

  //GPS////////////////////////////////////////////////


var watchID;
var geoLoc;


  function showLocation(position) { //visar postion
    startPosLat = position.coords.latitude; 
    startPosLong = position.coords.longitude; 
    var output=document.getElementById("output"); 
     //skriver ut svar
    addfraga();
   

  }

  function errorHandler(err) {
    if(err.code == 1) {
      alert("Error: Access is denied!"); // kommer upp man inte väljer att hemsida använder din postin
    }
    
    else if( err.code == 2) {
      alert("Error: Position is unavailable!"); //om inte postion kan läsas av kommer denna upp
    }
  }
  
  function getLocationUpdate(){ //Hämtar in latitude och longitude

     if(navigator.geolocation){
        var options = {enableHighAccuracy:true,maximumAge:30000,timeout:27000};
        geoLoc = navigator.geolocation; 
        watchID = geoLoc.watchPosition(showLocation, errorHandler, options); //läser av din plats
        
     }
     else{
        alert("Sorry, browser does not support geolocation!"); //Skriver ut om webbläsern inte stöjder geolocation
     }
  }
  

  function CustomAlert(){
    this.render = function(dialog){
      var winW = window.innerWidth;
      var winH = window.innerHeight;
      var dialogoverlay = document.getElementById('dialogoverlay');
      var dialogbox = document.getElementById('dialogbox');
      dialogoverlay.style.display = "block";
      dialogoverlay.style.height = winH+"px";

        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Är du säker på att du vill avsluta?";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button class="nej" onclick="Alert.ok()">Nej</button>'
        document.getElementById('dialogboxend').innerHTML = '<button class="ja" onclick="backtoelections()">Ja</button>'

    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();
 





    //if(latitude == 60.018 && longitude == 17.593){
    //<p>bjk</p>
    //}
  

  
  
  