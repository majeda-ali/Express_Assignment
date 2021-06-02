const express = require("express")
const app = express()
const bodyParser = require("body-parser")
/*
body parsing middleware.
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
*/
const path = require("path")
const fs = require("fs")

/*
 :To serve static files such as images, CSS files, and JavaScript files, use the 
    express.static   built-in middleware function in Express.
 

 : __dirname is an environment variable that tells you the absolute path of 
            the directory containing the currently executing file.

 : use the following code to serve images, CSS files,  and JavaScript files in a directory named public
*/

app.use(express.static(__dirname + '/public')); // load the files that are in the public directory


const bodyParserMW = bodyParser.urlencoded({
    extended: true
})
app.get("/", (req, res, next)=>{
  res.sendFile(path.join(__dirname,"..","express _assignment","index.html"))
})

  
app.get("/info", (req, res, next)=>{
    res.sendFile(path.join(__dirname,"..","express _assignment","form.html"))
  })
  
  

app.post("/InfoSignUp", bodyParserMW, (req, res, next)=>{
    console.log(req.body)
    fs.writeFileSync("message.txt" ,JSON.stringify(req.body));
    // JSON.stringify() method converts a JavaScript object or value to a JSON string,
    res.end();
})
app.listen(3000, ()=>{
    console.log("listening on 3000...")
})