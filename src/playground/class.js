class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` His major is ${this.major}.`;
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHome() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHome()) {
            greeting += ` I am from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const me = new Student('Ankur', 19, 'Computer Science');
const you = new Traveller('Pradyumn', 19);

console.log(me);
console.log(me.getDescription());

console.log(you);
console.log(you.getGreeting());