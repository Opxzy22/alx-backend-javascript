const fs = require('fs');

let csCount = 0;
const csName = [];
let sweCount = 0;
const sweName = [];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim());
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
        console.log(`Number of students: ${lines.length - 1}`);
        console.log(`Number of students in CS: ${csCount}. List: ${csName.join(', ')}`);
        console.log(`Number of students in SWE: ${sweCount}. List: ${sweName.join(', ')}`);
        resolve(); // Resolve the promise once processing is done
      }
    });
  });
}

module.exports = countStudents;
