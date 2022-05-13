
const express = require("express")
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const { get } = require("http");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Trnava&appid=0106011f85df365b51f8a517efbfc3eb&units=metric";
    https.get(url, function(response){
        res.sendFile(__dirname + "/index.html")
        res.write(bodyParser.body.city)
        res.send()










    })

})

app.listen(3000, function(){
    console.log("the server is running on port 3000");

})


        // response.on("data", function(data){
        //     const weatherData = JSON.parse(data) // makes it a JS object
        //     const temp = weatherData.main.temp // navigating through it with Parse JSON chrome extension
        //     const status = weatherData.weather[0].main
        //     const icon = weatherData.weather[0].icon
        //     const degrees = weatherData.main.temp
        //     const icon_full = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        //     res.write("<h1> The temperature in Trnava is currently " + temp + " degrees Celcius </h1>")
        //     res.write("It's " + degrees + " degrees")
        //     res.write("<h3> The status is: " + status)
        //     res.write("<img src="+icon_full+">")
        //     res.send()

        // })