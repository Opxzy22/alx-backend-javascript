const express = require('express');
const fs = require('fs');

const app = express();
const arg = process.argv[2];
let csCount = 0;
let csName = [];
let sweCount = 0;
let sweName = [];

app.get('/', (req, res) => {
  res.send(200, 'Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const response = 'This is the list of our students';
  fs.readFile(arg, 'utf-8', (err, data) => {
    if (err) {
      res.end(`${response} Cannot load database`);
    } else {
      const lines = data.split('\n').filter(line => line.trim());
      lines.forEach((student) => {
        const fields = student.split(',');
        if (fields.length === 4) {
          const [firstname, , , field] = fields;
          if (field === 'CS') {
            csCount += 1;
            csName.push(firstname);
          } else if (field === 'SWE') {
            sweCount += 1;
            sweName.push(firstname);
          }
        }
      });
      const studNumber = `Number of students: ${lines.length}`;
      const csList = `Number of students in CS: ${csCount} List: ${csName}`;
      const sweList = `Number of students in SWE: ${sweCount} List: ${sweName}`;
      res.end(`${response}\n${studNumber}\n${csList}\n${sweList}`);
    }
  });
});

app.listen(1245);

module.exports = app;
