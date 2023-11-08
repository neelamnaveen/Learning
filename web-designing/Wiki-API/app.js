const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose= require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/MongoDB', {useUnifiedTopology: true, useNewUrlParser: true });

const articleScheme={title:String, content:String};

const articles=mongoose.model("articles", articleScheme);



app.route("/articles")
 .get(function(req, res){
  articles.find(function(err, foundArticles){
    if(err){
      console.log(err);
    }else{
      res.send(foundArticles);
    }
  })
})

.post(function(req, res){
   const newArticle=new articles({
     title:req.body.title,
     content:req.body.content
   })
   newArticle.save( function(err){
     if (!err) {
       res.send("Succesfully added a new article.")
     }else{
       res.send(err);
     }
   });
});

app.listen(3000, function() {
  console.log("Server started Succesfully");
});
