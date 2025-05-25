interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 25,
  location: 'New York',
};
const student2: Student = {
  firstName: 'Bob',
  lastName: 'Johnson',
  age: 30,
  location: 'LA',
};
const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
studentsList.forEach(student => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(row);
});
document.body.appendChild(table);
