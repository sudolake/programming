const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function (req,res) {

    res.sendFile(__dirname + "/public/index.html")
    
    app.use(express.static('public'));

})

app.post("/",function(req,res){

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    
    const data = {
        members:[{
            email_address: email,
            status:"subscribed",
            merge_fields:{
                FNAME:firstName,
                LNAME:lastName }
        }]
    }
    const jsonData = JSON.stringify(data);
const url = "https://us1.api.mailchimp.com/3.0/lists/efea91e78b";
const options = {
    method:"POST",
    auth:"sudolake:8e3b43fe29edc70196ecf7f30ce931e8-us1"   //
}
const request = https.request(url, options, function(response){


    if(response.statusCode === 200){
        res.sendFile(__dirname + "/public/success.html")
    }
    else{
        res.sendFile(__dirname + "/public/failure.html")
    }



    response.on("data",function(){
    console.log(data);
})
   }) // request end


request.write(jsonData);
request.end();


}) // post end

app.post("/failure",function(requestik,responsik){
    responsik.redirect("/") // to root
})
app.listen(process.env.PORT || 3000, function(){ // process.env.PORT for Heroku, 3000 for locally
    console.log("the server started");

})

