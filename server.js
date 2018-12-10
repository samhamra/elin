var path = require('path'); 
const express = require('express') //webbserver
const bodyParser = require("body-parser"); //för att hämta ut info från post requesten
const fs = require('fs') // filsystem
const app = express()
const port = 3000
//för att skicka med html och javascriptfilerna till klienten
app.use(express.static('client'))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//HÄR ÄR DIN DATABAS JUST NU
var posts = ["Hej jag heter elin", "Hej jag heter sam"];
// GÖR OM TILL JSON OBJEKT FÖR ATT SKICKA ÖVER
var data = JSON.stringify(posts);

//skicka index.html om någon frågar efter /
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//skicka posts om någon frågar efter /getPosts
app.get('/getPosts', function(req, res) {
    res.send(posts);
});

//När någon försöker skicka en post till servern körs detta
app.post('/sendPost', function(req, res) {
  //titta i terminalen vad som skickades, hämta ut rätt info och stoppa in i din databas(arrayen)
  console.log(req.body)
})


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
