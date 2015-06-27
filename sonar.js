var five = require("johnny-five");
var http     = require('http');
var static = require('node-static');
var path = require('path');

// setup the http and socket.io server
var file = new static.Server(path.join(process.cwd(), 'public'));
var httpServ = http.createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
});

var io = require('socket.io')(httpServ);
var port = 4000;

httpServ.listen(port);
console.log('webserver listening on port:', port);

// log client connection
io.on('connection', function (socket) {
  console.log('something connected',socket.id);
});

// J5
var board = new five.Board();
board.on("ready", function() {
  // ensure the
  var proximity = new five.Proximity({
    controller: "HCSR04",
    pin: 7, // pin for the sensor data line
    freq: 200 // sample freq, in ms
  });

  proximity.on("data", function() {
    io.emit('proximity',this.cm);
  });

});