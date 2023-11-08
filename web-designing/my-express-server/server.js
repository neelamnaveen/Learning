const express = require('express');

const app = express();
app.get("/", function(req, res){
  res.send("<h1>Home Page<h1>");
});

app.get("/contact", function(req, res){
  res.send("<h1>contact me @ neelamnaveen@gmail.com<h1>");
});

app.get("/About", function(req, res){
  res.send("My name is Neelam Naveen");
});

app.listen(3000, function(){
  console.log("Server has started on port 3000");
});
