
const express = require("express") // imports express
const { hasUncaughtExceptionCaptureCallback } = require("process")
const app = express()



app.get("/", function(request, response){ 

    console.log(__dirname + "/expl.html") // in what directory this file is + the name of the html file i want
    
})
