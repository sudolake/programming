const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const https = require("https");


app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.hhgjxtml")

})


app.post("/",function(requestino,responsino){
    var cityName = requestino.body.city;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=6d4862c59581c19b55ef098d46c2fe78&units=metric";

    https.get(url, function(response){
        response.on("data",function(data){


            const weatherData = JSON.parse(data);
            console.log(weatherData);

            
            
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            
            res.write("<h1> the weather is "+ temp +" and the descriptions is </h1>");
            res.write("<h1> and the description is " + description + "</h1>")
            res.write("<img src=http://openweathermap.org/img/wn/"+icon+"@2x.png>")
            res.send()
            
        })







            console.log(response.statusCode)

    })



})








app.listen(3000,function(){
    console.log("server is ON on port 3000")
})