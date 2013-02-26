var connect = require('connect');
var app = connect()
          .use(connect.static(__dirname + '/www'))
          .listen(3000);