var pg = require('pg');
var conString = "postgres://postgres:123@localhost/academia";

var client = new pg.Client(conString);

client.connect(function(err , a) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    if(a) console.log(a.queryQueue);
});

module.exports = client;
