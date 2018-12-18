var express = require("express");
var app = express();
app.get("/", (req, res)=>{
    res.sendFile(__dirname+'./view/index.html');
});
app.use("/", static(__dirname+'./public/style.css'));