const http = require('http');
const fs = require('fs');
const arg = process.argv[2];
let csCount = 0;
let csName = [];
let sweCount = 0;
let sweName = []

app = http.createServer((req, res) => {
	res.writeHead(200, {'content-Type': 'text/plain'});

	if (req.url === '/') {
		res.end('Hello Holberton School!')
	} else if (req.url === '/students') {
		const message = 'This is the list of our students';
		try {
			const data = fs.readFileSync(arg, 'utf-8')
		} catch (err) {
			throw new Error('Cannot load database')
		}
		const lines = data.split('\n').filter(line => line.trim())
		lines.forEach((student) => {
			const fields = student.split(',')
			if (fields.length === 4) {
				const [firstname, , , field] = fields
				if (field === 'CS') {
					csCount += 1;
					csName.push(firstname);
				} else if (field === 'SWE') {
					sweCount += 1;
					sweName.push(firstname)
				}
			}
		});
		const studNum = `Number of students: ${lines.length - 1}`;
		const csList = `Number of students in CS: ${csCount}. List: ${csName.join(', ')}`;
		const sweList = `Number of students in SWE: ${sweCount}. List: ${sweName.join(', ')}`;
		res.end(`${message}\n${studNum}\n${csList}\n${sweList});
	}
});
app.listen(1245)

module.exports = app

