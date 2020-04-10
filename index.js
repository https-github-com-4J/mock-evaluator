var express = require("express");
var app = express();
const port = 8081
app.listen(port, () => {
 console.log("Server running on port " + port);
});

execution_data = {
	"license_plate": "ABC123",
	"category": "old_plate",
	"score": 90.14,
	"decisive_model": "watson",
	"executed_models": {
		"sherlock": 78.86,
		"watson": 90.14
	}
}

app.post("/recognize/license_plate", (req, res, next) => {
 res.json(execution_data);
});