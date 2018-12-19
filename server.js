const express = require("express");
const app = express();
app.get("/", (req, res)=>{
    res.sendFile(__dirname+'/view/index.html')
});
app.use("/", express.static(__dirname+'/public'));
app.get("/api/timestamp/:time",(req, res)=>{
	var str = req.params.time;
	if(str !==""){
		
		res.json({"unix":0,"utc":0});
	}else
		var date = new Date();
		var unix = date.getTime();
		var utc = date.toUTCString();	
		res.json({"unix":unix,"utc":utc});
});
app.listen(process.env.PORT || 8080);