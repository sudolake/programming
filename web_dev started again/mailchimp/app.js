
//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { application } = require("express");
const https = require("https");
const { response } = require("express");


const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

app.get("/", function(req,res){

    res.sendFile(__dirname + "/signup.html")

})


app.post("/", function(req, res){

    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    var data = {

        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]



    }
    var jsonData = JSON.stringify(data);
    var url = "https://us13.api.mailchimp.com/3.0/lists/695494a713";
    const options = {
        method: "POST",
        auth:"sudolake:6644bed503bdb01f4242818dc02f1c65-us13"
    }


    const rquest = https.request(url,options,function(response){


        if(response.statusCode === 200){

            res.sendFile(__dirname + "/success.html")

        }
        else{
            res.sendFile(__dirname + "/failure.html")
        }
        response.on("data", function(data){
            console.log(JSON.parse(data))
        })

    })

rquest.write(jsonData);
rquest.end()
})



app.post("/failure", function(req,res) {
    res.redirect("/")
})





app.listen(process.env.PORT || 3000,function(){
    console.log("server is running on port 3000");

})

