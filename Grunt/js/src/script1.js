function Human() {
    this.name = 'Vasya';
    this.age = '25';
    this.sex = 'man';
    this.growth = '1.75 m';
    this.weight = '70 kg';
};

function Student(study, scholarship) {
    Human.apply(this, arguments);
    this.name = 'Oleg';
    this.study = study;
    this.scholarship = scholarship;
    this.watchTV = function () {
        console.log('Oh, it is my favorite serial! I like watch TV.')
    }
};

function Worker(work, salary) {
    Human.apply(this, arguments);
    this.work = work;
    this.salary = salary;
    this.working = function () {
        console.log('Hard coding');
    }
};

Student.prototype = Object.create(Human.prototype);
Worker.prototype = Object.create(Human.prototype);

var developer = new Worker('Goit', '1000 usd');
    Studens = new Student('NAU', '100 usd');

console.log('Person:', developer.name);
console.log('Works at', developer.work);
console.log('Salary:', developer.salary);
developer.working();

console.log('Person:', Studens.name);
console.log('Age:', Studens.age);
console.log('Student of:', Studens.study);
console.log('Scholarship:', Studens.scholarship);
Studens.watchTV();
