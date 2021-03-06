const express = require('express');
const JSONfn = require('json-fn');
const app = express();

const commands = [
  {
    name: 'test',
    helpMessage: 'this is a test function',
    execute: function (args) {
      konsole.writeLine('test!');
    }
  }
];

function getCommand(name) {
  return commands.find(elem => elem.name === name);
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/get/:name', function (req, res) {
  let command = getCommand(req.params.name);
  if(typeof command === 'undefined')
    res.status(404).send('Command not found');
  else
    res.send(JSONfn.stringify(command));
});

app.get('*', function (req, res) {
    res.status(404).send('404 Not found');
});

app.listen(3000, function () {
  console.log('Repository is listening on port 3000');
});
