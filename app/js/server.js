/*
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

// Socket settings
io.sockets.on('connection', wsStart);

io.set('log level', 0);

function wsStart(data) {
  data.on('new_message', wsSendData);
}

function wsSendData(data) {
  io.sockets.emit('wsGetData', data);
}

app.get('/play', function(req, res) {
  wsSendData({'action':'play'});
  res.json({
    status: true
  });
});

server.listen(10086);
*/
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(10086);

app.get('/play', function (req, res) {
  wsSendData({'action':'play'});
  res.json({
    status: true
  });
});

app.get('/pause', function (req, res) {
  wsSendData({'action':'pause'});
  res.json({
    status: true
  });
});

function wsStart(data) {
  data.on('newMessage', wsSendData);
}

function wsSendData(data) {
  io.sockets.emit('wsGetData', data);
}

io.on('connection', wsStart);
