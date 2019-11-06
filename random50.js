var startPosLat;
var startPosLong;


var numbers = [
    'ha hårdare straff <br> på våldäkter?',
    'dricka alkohol på gatan?',
    'få köra med bil med<br> 0.5 promille i blodet?',
    'få dödshjälp?', 'köpa starköl <br> vid 18 års ålder?',
    'förbjuda Sprit över 30%?',]; //En array med frågor

  function addfraga () {
 
  console.log(startPosLat);
  if(startPosLat < 59.315028 &&  startPosLong > 17.989388 && startPosLat > 59.299376 && startPosLong < 18.029594)
  //if(startPosLat < 60.057612 &&  startPosLong > 17.478959 && startPosLat > 60.00324 && startPosLong < 17.610694)
  {
    numbers = numbers.concat([
      "bygga fler hyresrätter i <br> områden där höginkomsttagare <br> bor i Stockholm?",
      "ha vägtullar i stockholm?",
      "ha militär polis i <br> stockholms förorter?",
    ]);
    }

    
    if(startPosLat < 60.057612 &&  startPosLong > 17.478959 && startPosLat > 60.00324 && startPosLong < 17.610694)
    {
      numbers = numbers.concat([
        "bygga en ny hockey arena <br> i Uppsala?",
        "bygga spårvagn i Uppsala?",
        "ha ett bussfritt torg i Uppsala?",
      ]);
      }
  };

  function spin() //onclick funktion spin
  {
    if (numbers.length == 0) //Om spelet är klart visasa en "alert"
    {
      alert("Spelet är klart");
      location.replace("page2.html"); //När man väljer stäng så kommer man tillbaka till valsidan
      generateNumbers();
    }


    //Randomerar Frågorna max en gång per runda
    var rand = Math.floor(Math.random() * numbers.length);
    var num = numbers[rand];
    numbers.splice(rand, 1);
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
  
    //if(latitude == 60.018 && longitude == 17.593){
    //<p>bjk</p>
    //}
  


  