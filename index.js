var express = require('express');
var bodyParser = require('body-parser');

var books = ['doom', 'grapes of wrath', '1984'];

var app = express();

app.use(bodyParser.json());

app.get('/books', function(req, res, next) {
  res.send(books);
});

app.post('/books', function(req, res, next) {
  books.push(req.body.name)
  res.send(books);
});

app.put('/books', function(req, res, next) {
  var newPosition = req.body.position;
  books[newPosition] = req.body.newName;
  res.send(books);
});

app.delete('/books:id', function(req, res, next) {
  book.splice(req.params.id, 1);
  res.send(books);
});

// var port = 3000;
app.listen(3000, function() {
  console.log('listening on port ' + 3000);
});
