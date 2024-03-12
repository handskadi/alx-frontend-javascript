export default function updateStudentGradeByCity(listStudents, targetLocation, newGrades) {
  return listStudents
    .filter(({ location }) => location === targetLocation)
    .map((obj) => {
      const mytargetNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
      const { grade = 'N/A' } = mytargetNewGrade.length > 0 ? mytargetNewGrade[0] : {};
      return { ...obj, grade };
    });
}
