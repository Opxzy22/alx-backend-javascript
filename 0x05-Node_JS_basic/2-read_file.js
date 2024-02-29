const fs = require('fs');

const csName = [];
let csCount = 0;
let sweCount = 0;
const sweName = [];

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim());
    lines.forEach((student) => {
      const fields = student.split(',');
      if (fields.length > 0) {
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
  } catch (err) {
    console.log('Cannot load database', err);
  }
}

module.exports = countStudents;
