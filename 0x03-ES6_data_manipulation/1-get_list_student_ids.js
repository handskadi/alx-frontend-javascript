export default function getListStudentIds(mylistStudents) {
  return Array.isArray(mylistStudents) ? mylistStudents.map(({ id }) => id) : [];
}
