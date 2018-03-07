const path = require('path')

module.exports = function(app){

	app.get('/', function(req, res){
		res.sendFile(__dirname + path.join(__dirname, '/../assets/html/reserve.html'));
	});

	app.get('/tables', function(req, res){
		res.sendFile(__dirname + path.join(__dirname, '/../assets/html/tables.html'));
	});

}