const express = require("express");
const app = express();
app.get("/", (req, res)=>{
    res.sendFile(__dirname+'/view/index.html')
});
app.use("/", express.static(__dirname+'/public/style.css'));
app.get("/:time",(req, res)=>{
	var str = req.params.time;
	if(str !===""){
		res.json({"unix":0,"utc":0});
	}else	
		res.json({"unix":10,"utc":10});
});
app.listen(process.env.PORT || 8080);