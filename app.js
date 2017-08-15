// Pull this up in the browser using: http://localhost:3000/


// requires the express module
const express = require('express');
// creates an instance of express.
const app = express();
// This calls/creates/accesses the file path.
const path = require('path');

console.log("Hi from app.js");

// This serves the static file to the plate.
app.use('/our-app-1', express.static('our-app-1'));

// This example will send 'Hello World' to the page.
app.get('/', function(req, res){
  res.send('Hello User, try putting /hello or /goodbye at the end of the url.');
});

app.get('/hello', function(req, res){
  res.send('Hello there!');
});

app.get('/goodbye', function(req, res){
  res.send('See you later!');
});

// This 'listens' for requests from localhost:3000/.
const port = 3000;
app.listen(port, function(){
console.log("App is running")
});

// This serves the plate to the customer.
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});
