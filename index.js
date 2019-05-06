var express = require("express");
var mysql = require('mysql');
var app = express();


if(process.env.JAWSDB_URL){
	var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: "web-db"
	});
}
// set port
var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

// routes
app.get("/", function(req, res) {
	res.render("index");
});

app.listen(port, function() {
	console.log("running");
});