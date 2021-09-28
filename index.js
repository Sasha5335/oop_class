function generateRundomId() {
  return Math.floor(Math.random() * 98) + 2;
}

class Person {
  _id;
  name;
  age;

  constructor(name, age) {
    this._id = generateRundomId();
    this._name = name;
    this._age = age;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      this._age = 0;
    } else {
      this._age = value;
    }
  }

  get fullName() {
    return `Имя: ${this._name} Возраст: ${this._age}`;
  }

  get greeting() {
    return `Привет меня зовут ${this._name}`;
  }
}

class Employee extends Person {
  constructor(name, age, inn, number) {
    super(name, age);
    this.inn = inn;
    this.number = number;
  }

  get greeting() {
    return `Привет меня зовут ${this._name}`;
  }
}

class Developer extends Employee {
  constructor(name, age, inn, number, level, language) {
    super(name, age, inn, number);
    this.level = level;
    this.language = language;
  }

  get greeting() {
    return `Привет меня зовут ${this._name}`;
  }
}

const person = new Person('Test_Person', '18');

const employee = new Employee('Test_Employee', '18', '123456789', '15');

const developer = new Developer(
  'Test_Developer',
  '18',
  '123456789',
  '15',
  'djun',
  'en'
);

const personList = [person, employee, developer];

const massGreeting = (persons) => {
  persons.forEach((item) => {
    console.log(item.greeting);
  });
};

massGreeting(personList);
