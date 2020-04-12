var express = require("express");
var app = express();
var request = require('request');
var fs = require('fs');

const PORT = 8081
const IMG_NAME = 'test.jpg'
const SHERLOCK_URL = 'http://localhost:8085/execute/sherlock'
const TYRION_URL = 'http://localhost:8089/execute/tyrion'
const WATSON_URL = 'http://localhost:8088/execute/watson'

app.listen(PORT, () => {
 console.log("Server running on port " + PORT);
});

app.post("/recognize/license_plate", (req, res, next) => {
	request({
        url: TYRION_URL,
        method: 'POST',
        headers: {
			'content-disposition': 'attachment; filename=' + IMG_NAME,
			'content-type' : 'image/jpg'
        },
        encoding: null,
        body: fs.createReadStream(IMG_NAME)
   	}, (error, response, body) => {
        if (error) {
        	res.json({name : error});
        } else {
        	res.json(JSON.parse(response.body.toString()));
        }
   	});	
});