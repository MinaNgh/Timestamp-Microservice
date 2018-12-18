const express = require("express");
const app = express();
app.get("/", (req, res)=>{
    res.sendFile(__dirname+'./view')
});
app.use("/", express.static(__dirname+'./public'));
app.listen(process.env.PORT || 8080);