export function mkTask3() {
	
	class Employee {
		greetWorld = "Hello world!";
		_company = "Mkweb Company";
		constructor (name, profession) {
			this.name = name;
			this.profession = profession;
		}
	
		sayHello() {
			return this.greetWorld;
		}

		get company() {
			return this._company;
		}

		set company(x){
			this._company = `${x} Welcome to Mkweb`;
		}
		
	}

	const Job  = class extends Employee {
		constructor(name, wage){
			super(name, '');
			this.wage = wage;
		}

		subMethod() {
			return super.sayHello();
		}
	};



	let emp1 = new Employee('Ahmed', 'Software Engineer');
	let job1 = new Job('IT work', 3000);
	console.log(emp1.sayHello());
	console.log(emp1.name);
	emp1.company = 'KADI';
	console.log(emp1.company);
	console.log(job1.subMethod());
}

