var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
var config = {
apiKey: "AIzaSyB-rUnUzB4yakmIujeByqc_yd3vmqHsoXE",
authDomain: "musicman-1339.firebaseapp.com",
databaseURL: "https://musicman-1339.firebaseio.com",
storageBucket: "musicman-1339.appspot.com",
};

app.use('/', express.static(__dirname + '/build'));
app.get('/', function (req ,res) {

});
app.post('/login', function(req, res){
  if(req.body.username == 'admin' && req.body.password == 'admin'){
    res.json({id_token: '123'});
  } else {
    res.status(400);
    res.json({invalid: true});
  }
});
app.listen(3000, function () {
    console.log('Musicman @ port 3000');
});
