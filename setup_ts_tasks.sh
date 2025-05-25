#!/bin/bash

BASE_DIR=~/alx-2025/alx-frontend-javascript/0x04-TypeScript

mkdir -p $BASE_DIR

echo "Creating tasks 0–5..."

# ----------- TASK 0 -----------
mkdir -p $BASE_DIR/task_0/js
cat > $BASE_DIR/task_0/js/main.ts << 'EOF'
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
EOF

# ----------- TASK 1 -----------
mkdir -p $BASE_DIR/task_1/js
cat > $BASE_DIR/task_1/js/main.ts << 'EOF'
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};
console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (first, last) =>
  `${first.charAt(0)}. ${last}`;
console.log(printTeacher("John", "Doe"));

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}
const student = new StudentClass("Alice", "Smith");
console.log(student.displayName(), student.workOnHomework());
EOF

# ----------- TASK 2 -----------
mkdir -p $BASE_DIR/task_2/js
cat > $BASE_DIR/task_2/js/main.ts << 'EOF'
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
class Director implements DirectorInterface {
  workFromHome() { return 'Working from home'; }
  getCoffeeBreak() { return 'Getting a coffee break'; }
  workDirectorTasks() { return 'Getting to director tasks'; }
}
class Teacher implements TeacherInterface {
  workFromHome() { return 'Cannot work from home'; }
  getCoffeeBreak() { return 'Cannot have a break'; }
  workTeacherTasks() { return 'Getting to work'; }
}
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}
function executeWork(employee: Director | Teacher): string {
  return isDirector(employee)
    ? employee.workDirectorTasks()
    : employee.workTeacherTasks();
}
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
EOF

# ----------- TASK 3 placeholder (ambient namespace setup) -----------
mkdir -p $BASE_DIR/task_3/js
touch $BASE_DIR/task_3/js/main.ts
touch $BASE_DIR/task_3/js/interface.ts
touch $BASE_DIR/task_3/js/crud.d.ts

# ----------- TASK 4 placeholder (namespace + merging) -----------
mkdir -p $BASE_DIR/task_4/js/subjects
touch $BASE_DIR/task_4/js/main.ts
touch $BASE_DIR/task_4/js/subjects/Cpp.ts
touch $BASE_DIR/task_4/js/subjects/Java.ts
touch $BASE_DIR/task_4/js/subjects/React.ts
touch $BASE_DIR/task_4/js/subjects/Subject.ts
touch $BASE_DIR/task_4/js/subjects/Teacher.ts

# ----------- TASK 5 placeholder (branded nominal types) -----------
mkdir -p $BASE_DIR/task_5/js
touch $BASE_DIR/task_5/js/main.ts

echo "✅ All files and directories created with starter or complete code for tasks 0–5."
echo "Run npm install inside each task folder before compiling."
