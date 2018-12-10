//HÄMTA DATA

var request = new XMLHttpRequest();
//Skicka en getrequest till /getPosts, jag har definerat denna route i server.js
request.open("GET", '/getPosts');
request.send();
//denna funktion körs när servern har svarat, och svaret finns i request.response;
request.onload = function(e) {
  var response = request.response;
  //Vi skickade över arrayen som en string, så nu måste vi parsa den tillbaks till array(objekt)
  var data = JSON.parse(response);
  console.log(data);
  console.log(typeof(data));
}


//SKICKA DATA
//Samma sak, men nu gör vi en post request till servern på /sendPost och skickar med ett objekt
var request2 = new XMLHttpRequest();
request2.open("POST", '/sendPost');
request2.setRequestHeader("Content-Type", "application/json");
request2.send(JSON.stringify({post: "Hej, detta är en post som jag skickade över från klienten"}));