const express = require("express");
const date = require(__dirname+ "/date.js");
const mongoose = require("mongoose");

const app = express();

var items = ['Buy food','Cook food','Eat food'];
var workItems = [];
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get('/', function(req,res){

  let day = date();
  res.render('list', {ListTitle: day, NewListitem: items});
})

app.get('/work', function(req,res){

  res.render('list', {ListTitle: "Work list", NewListitem: workItems});
})

app.get('/about', function(req,res){

  res.render('about');
})

app.post('/', function(req,res){
  if(req.body.list == "Work"){
    workItems.push(req.body.userinput);
    res.redirect('/work');
  }else{
  items.push(req.body.userinput);
  res.redirect('/');
  }
})

app.listen(3000,function(){
  console.log("Server up!");
})
