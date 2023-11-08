const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser:true});
const fruitsSchema= new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const fruit= mongoose.model("Fruit", fruitsSchema);

const Fruit = new fruit({
  name:"Apple",
  rating:8,
  review:"Pretty solid as a fruit"
});

Fruit.save();
