const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html")
    app.use(express.static('public'));

})

app.post("/", function(req,res){

    var weight = Number(req.body.weight)
    var height = Number((req.body.height)/100)


    res.send("your BMI is " + Math.round(weight / (height*height)))

    





})



app.listen(3000, function(){

    console.log("Server has started at port 3000")
})