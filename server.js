var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();



// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/app'));
// Routes
app.get('*', function(req, res, err){
    res.sendFile(path.join(__dirname + "/app/index.html"));
});

var server = app.listen(process.env.PORT || 3100, function(){
    var port = this.address().port;
    console.log ('App server listening on port ' + port);
});