var express = require('express');
var editviewapp = express();
var path = require('path');
editviewapp.use(express.static(path.join(__dirname)));

editviewapp.get('/', function(req, res){
    //res.sendfile('indexdefault.html', { root: __dirname + "/" }) ;
    res.sendfile('index.html', { root: __dirname + "/" }) ;
});
editviewapp.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});