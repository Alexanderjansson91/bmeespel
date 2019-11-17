var startPosLat;
var startPosLong;




 var numbers = [
    'legalisera cannabis?',
    'tillåta prostution?',
    'förbjuda Sprit över 30%?',
    'sänka ålder på systembolaget?',
    'förbjuda religion?',
    'få köra båt med 0.8 promillei blodet?', 'Tillåta kokain på krogar?',
    'förbjuda rasistiska partier?',]; //En array med frågor

  function addfraga () { // En funktion som binder ihop Gps:ens plats med tillägs frågor
 
  console.log(startPosLat);
  //Om du är på liljeholmen så läggs dessa frågor på
  if(startPosLat < 59.315028 &&  startPosLong > 17.989388 && startPosLat > 59.299376 && startPosLong < 18.029594)
  {
    numbers = numbers.concat([
      "Ha fet jävla rejv fest i kungsträdgården?",
      "Tillåta fotbollsfans slås mot varandra efter en match på en angiven plats i stockholm?",
      "ha en graffitivägg på slottet i stockholm?",
    ]);
    }

    //Om du är i björklinge så läggs dessa frågor på 
    if(startPosLat < 60.057612 &&  startPosLong > 17.478959 && startPosLat > 60.00324 && startPosLong < 17.610694)
    {
      numbers = numbers.concat([
        "Ha dyrare alkohol på nationspubar, för att minska konkurransen?",
        "göra uppsala stad 100% bilfritt?",
        "få konsumera alkohol på uppsalas gator 30 April?",
      ]);
      }
  };


  var clicks = 0; //varibal för att visa värdet på antal kort
  function spin() //Function för att få fram nya frågor

  {
    
    clicks += 1; //plussar ett kort per knapptryck
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


  
  //GPS////////////////////////////////////////////////

var watchID;
var geoLoc;
var output;

  function showLocation(position) { //visar postion
    startPosLat = position.coords.latitude; 
    startPosLong = position.coords.longitude; 
    output =document.getElementById("output"); 

    addfraga(); //Funktion för att binda ihop dom lokalafrågorna med GPS:en.
   

  }

  function errorHandler(err) {
    if(err.code == 1) {
      alert("Error: Access is denied!"); // kommer upp man inte väljer att hemsidan använder din postin
    }
    
    else if( err.code == 2) {
      alert("Error: Position is unavailable!"); //om inte postion kan läsas av kommer denna upp
    }
  }
  
  function getLocationUpdate(){ //Hämtar in position

     if(navigator.geolocation){
        var options = {enableHighAccuracy:true,maximumAge:30000,timeout:27000};
        geoLoc = navigator.geolocation; 
        watchID = geoLoc.watchPosition(showLocation, errorHandler, options); 
        
     }
     else{
        alert("Sorry, browser does not support geolocation!"); //Skriver ut om webbläsern inte stöjder geolocation
     }
  }
  
//modul fönster för att avsluta spelet
  function CustomAlert(){
    this.render = function(dialog){ 
      var winH = window.innerHeight;
      // Gör så att bakrundden blir fadad
      dialogoverlay.style.display = "block"; 
      dialogoverlay.style.height = winH+"px";
        dialogbox.style.display = "block"; //Skapar boxen utifrån dialogbox klasserna
        document.getElementById('dialogboxhead').innerHTML = "Är du säker på att du vill avsluta?";  //Skrivs ut på modulen
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button class="nej" onclick="Alert.ok()">Nej</button>' //nej knapp
        document.getElementById('dialogboxend').innerHTML = '<button class="ja" onclick="backtoelections()">Ja</button>' //Ja knapp
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert(); //visar allting som ett "alert fönster"
 
  