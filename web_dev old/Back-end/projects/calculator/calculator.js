const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){

    res.sendFile(__dirname + "/index.html")

})

app.post("/", function(req, res){

    res.send("your number is " + Number(req.body.num1 * req.body.num2))

})

app.listen(3000, function(){
    console.log("the server has started at port 3000")

})