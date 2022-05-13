var reqExpress = require("express");
var bodyParser = require("body-parser");

var app = reqExpress();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){

    res.sendFile(__dirname + "/bmiCalc.html")

})

app.post("/",function(req,res){

    var height = (Number(req.body.height) / 100)
    var weight = Number(req.body.weight)

    var BMI = weight / (height*height)
    res.send("your BMI is "+ Math.round(BMI))
})



app.listen(3000,function(){

    console.log("server ON on port 3000")

})