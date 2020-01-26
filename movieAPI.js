var express = require('express');
var request = require('request');
var app = express();





app.get("/movie", function(req,res) {
	var movieName = req.query.search;
	var url="https://www.omdbapi.com/?&apikey=thewdb&s="+ movieName;
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
		
			var data = JSON.parse(body);
			res.render("movie.ejs", {data:data})
		}
	});
});

app.get("/", function(req, res) {
	res.render("search.ejs");
});




app.listen(3000, function() {
	console.log("Server has started!!");
})
