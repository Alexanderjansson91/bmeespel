var startPosLat; //variabel för latitude
var startPosLong; //variabel för longitude



 var numbers = [
    'ha hårdare 100 <br> på våldäkter?',
    'dricka alkohol på gatan?',
    'få köra med bil med<br> 0.5 promille i blodet?',
    'som medborgare ha mer tillåtelse till att stoppa kriminalitet?',
    'Bör vi höja lönerna i vården?',
    'ha bättre skolmat', 'köpa starköl <br> vid 18 års ålder?',
    'förbjuda Sprit över 30%?',]; //En array med frågor

  function addfraga () { // En funktion som ger startPosLat och startPosLong ett värde
 
  console.log(startPosLat);
  if(startPosLat < 59.315028 &&  startPosLong > 17.989388 && startPosLat > 59.299376 && startPosLong < 18.029594)
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
      alert("Error: Access is denied!"); // kommer upp man inte väljer att hemsida använder din postin
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
 
  