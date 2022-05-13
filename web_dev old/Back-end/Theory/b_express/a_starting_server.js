
const express = require("express") // imports express
const app = express()



app.get("/", function(request, response){ // "/" is root, its the main page (home page)
                                          // responds to the url localhost:3000 since its the main page
                                          // request and response can be called anything ex. req, res
    response.send("<h1>Welcome to my site </h1>")  
    
})

app.get("/about", function(request, response){ // responds to the url: localhost:3000/about
    response.send("<h3> Im matej krajcovic</h3> <h2> im a fucking retard<h2>"  )
})


app.listen(3000, function(){ // specify the port (like a channel)   - starting the server
    console.log("the server has started at the port 3000");
})
// this creates a server on the channel (port) 3000

// start the server by: node nameOfFile.js
// you have to restart the server to apply changes,
// nodemod does it for you
// install it by: npm i -g nodemod
// then start the server by: nodemod nameOfFile.js