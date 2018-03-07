const path = require('path')

module.exports = function(app){

	app.get('/', function(req, res){
		res.sendFile(__dirname + path.join(__dirname, '/../assets/html/reservations.html'));
	});

	app.get('/tables', function(req, res){
		res.sendFile(__dirname + path.join(__dirname, '/../assets/templates/tables.html'));
	});

}