var util = require('util');
var express = require('express');
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

function listTasks(req,res)
{
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('listTasks '+util.inspect(req));	
}


/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}));


/* Gestion des routes en-dessous
   ....                         */
app.get('/', listTasks);

app.get('/add-task', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('Page /add-task !');
});
app.get('/check-task', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('Page /check-task !');
});
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page inconnue !');
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})