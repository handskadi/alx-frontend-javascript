export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((accumulator, { id }) => accumulator + id, 0);
}
