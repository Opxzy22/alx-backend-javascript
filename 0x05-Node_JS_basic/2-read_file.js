const fs = require('fs');

let csName = [];
let csCount = 0;
let sweCount = 0;
let sweName = [];

function countStudents(path) {
    let data;
    try {
        data = fs.readFileSync(path, 'utf-8');
    } catch(err) {
            console.log("Cannot load the database")
            return;
    }
    const database = data
    const students = database
                .split('\n').filter(line => line.trim() !== '')
    students.forEach(student => {
        const fields = student.split(',');
        if (fields.length == 4) {
            const [firstname, lastname, age, field] = fields;
            if (field === 'CS') {
                csName.push(firstname);
                csCount++
            } else if (field === 'SWE') {
                sweName.push(firstname);
                sweCount++
            }
        }
    });
    console.log(`Number of students: ${students.length - 1}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csName.join(', ')}`)
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweName.join(', ')}`)
}

module.exports = countStudents;

