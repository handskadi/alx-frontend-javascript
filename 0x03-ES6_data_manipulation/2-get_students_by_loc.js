export default function getStudentsByLocation(listStudents, mytargetLocation) {
  return listStudents.filter(({ location }) => location === mytargetLocation);
}
