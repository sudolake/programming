//jshint esversion:6

const express_require = require("express");
const req = require("express/lib/request");

const app = express_require();
// "/" = root

app.get("/", function(request,response){

    response.send("<h1>Main page</h1>")

})


app.get("/contact", function(request,response){

    response.send("<h1>This is my contact page</h1>")

})

app.get("/about", function(request,response){

    response.send("<h1>I'm Matej</h1>")

})











app.listen(3000, function(){

    console.log("server started...")

});