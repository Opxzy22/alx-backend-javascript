export default function getListStudentIds(ArrayObj) {
    if (!Array.isArray(ArrayObj)) {
        return []
    }

    const ids = ArrayObj.map(student => student.id);

    return ids;

}