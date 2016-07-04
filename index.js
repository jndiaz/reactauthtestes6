var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var jwt = require('jsonwebtoken');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', express.static(__dirname + '/build'));
app.get('/', function (req ,res) {

});
app.post('/login', function(req, res){
  if(req.body.username == 'admin' && req.body.password == 'admin'){
    var token = jwt.sign({username: req.body.username, password: req.body.password}, 'secretString');
    res.json({id_token: token});
  } else {
    res.status(400);
    res.json({invalid: true});
  }
});
app.listen(3000, function () {
    console.log('Musicman @ port 3000');
});
