export default function getStudentIdsSum(students) {
  const IdSum = students.reduce((sum, student) => sum + student.id, 0);
  return IdSum;
}
