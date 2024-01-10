export default function getStudentIdsSum(students) {
    const IdSum = students.reduce((sum, student) => {
        return sum + student.id;
    }, 0);
    return IdSum;
}