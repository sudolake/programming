//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
let ejs = require('ejs')
const app = express();
app.set("view-engine", "ejs");

app.get("/", function(req,res){ // what happens when a user tries to access the home route

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    if (currentDay === 6 || currentDay === 0){
        day = "weekend";
        
    }
    else{
        day = "weekday"
    }

    res.render("list", {kindOfDay:day});
});

app.listen(3000, function(){

    console.log("server is up and running on port 3000")

})