//jshint esversion:6

const express= require("express");
const bodyParser= require("body-parser");

const app= express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){

  var today =new Date();
  var currentDay=today.getDay();
  var day="";
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var dayName = days[today.getDay()];

  if(today.getDay()==6 || today.getDay()==0){
    day="Weekend";
  }else{
    day="Weekday";
  }

res.render("lists", {kindofDay:dayName});

});




  app.listen(3000, function(){
      console.log("Server is started on port 3000");
  })
