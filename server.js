const express = require("express");
const app = express();
app.get("/", (req, res)=>{
    res.sendFile(__dirname+'/view/index.html')
});
app.use("/", express.static(__dirname+'/public/style.css'));
app.listen(process.env.PORT || 8080);