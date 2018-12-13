getData(); //hämtar alltid data i början så du kan visa det på sidan.


//HÄMTA DATA
function getData() {
  var request = new XMLHttpRequest();
  //Skicka en getrequest till /getPosts, jag har definerat denna route i server.js
  request.open("GET", '/getPosts');
  request.send();

  //DETTA ÄR DET DU BEHÖVER BRY DIG OM
  //denna funktion körs när servern har svarat, och svaret hamnar i request.response;
  request.onload = function(e) {
    var response = request.response;
    //Servern skickade över arrayen som en string, så nu måste vi parsa den tillbaks till array(objekt)
    var data = JSON.parse(response);
    console.log(data);
    console.log(typeof(data));
    if (data.toString() === "") {
      //do nothing
    } else {
      document.getElementById("data").innerHTML = "";
      for(var i = 0; i < data.length; i++){
        console.log(data[i]);
        var createPelement = document.createElement("p");
        createPelement.innerHTML = data[i];
        document.getElementById("data").append(createPelement);
      }
    }
  }
}

function elinFunc(item, index) {
 var hejsan = document.getElementById("textInput");
 console.log(hejsan.value);
 sendData(hejsan.value);
 location.reload()
}

//SKICKA DATA
//Samma sak, men nu gör vi en post request till servern på /sendPost och skickar med ett objekt
function sendData(tjo) {
var request2 = new XMLHttpRequest();
request2.open("POST", '/sendPost');
request2.setRequestHeader("Content-Type", "application/json");
//VI KAN BARA SKICKA STRINGS, SÅ GÖR OM OBJEKTET TILL EN STRING, OCH SKICKA ÖVER STRINGEN
// HÄMTA RÄTT INFO och skicka till SERVERN
var post = {data: tjo};
request2.send(JSON.stringify(post));
}
