var http = require('http');
var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var path = require('path');
//either I will use an environment variable on the server or locally use 3000
var port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '/dist'))); //figure this out

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
// app.use('*', function(req, res) {
// 	return res.sendFile(path.join(__dirname, '/', 'index.html'));
// });
app.post('/', handleSendProfile);
app.get('/', (req, res) => res.send('Your reverse proxy is working kinda'));

http.createServer(app).listen(port, function(err) {
	console.log('listening on ' + port);
});

//creates transport
function handleSendProfile(req, res) {
	console.log("request arrived");
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'helsinkikaleidoscope@gmail.com', // Your email id
			pass: 'kaleidoskooppi' // Your password
		}
	});
	var mailOptions = {
		from: '"Kaleidoscope" <jonathondsmartin@gmail.com>', // sender address
		to: [req.body.teacherEmail || req.body.teacher, req.body.studentEmail], // list of receivers
		subject: 'Kaleidoscope Profile', // Subject line
		html: '<h2>Your Kaleidoscope Profile</h2>' +
			'<h4>Name: ' + req.body.studentName + '</h4>' +
			'<h4>Faculty: ' + req.body.faculty + '</h4>' +
			'<h4>Student Email: ' + req.body.studentEmail + '</h4>' +
			'<h3>Needs</h3>' +
			'<p>' + req.body.profile.needs + '</p>' +
			'<h3>Current Skills</h3>' +
			'<p>' + req.body.profile.cskills + '</p>' +
			'<h3>Motivation</h3>' +
			'<p>' + req.body.profile.motivation + '</p>' +
			'<h3>Personality</h3>' +
			'<p>' + req.body.profile.personality + '</p>' +
			'<h3>Learning History</h3>' +
			'<p>' + req.body.profile.lhistory + '</p>' +
			'<h3>Feedback</h3>' +
			'<p>' + req.body.feedback + '</p>'
	};
	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
			res.json({
				yo: 'error'
			});
		} else {
			console.log('Message sent: ' + info.response);
			res.json({
				yo: info.response
			});
		};
	});
}
