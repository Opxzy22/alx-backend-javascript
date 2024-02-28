function countStudents(path) {
	const data = fs.readFileSync(path, 'utf-8')
	const students = data.split('\n')

	if (!students) {
		throw new Error('Cannot load the database')
	}
	students.forEach(student, () => {
		const fields = student.split(',')
		if (fields.length == 4) {
			const [firstname, lastname, age, field] = fields
		}
	}
		console.log(`Number of students: ${students.length}`)
	console.log(`Number of students in FIELD: 6. List: LI
