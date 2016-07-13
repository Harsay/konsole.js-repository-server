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

app.get('/get/:name', function (req, res) {
  let command = getCommand(req.params.name);
  res.send(JSONfn.stringify(command));
});

app.listen(3000, function () {
  console.log('Repository is listening on port 3000');
});
