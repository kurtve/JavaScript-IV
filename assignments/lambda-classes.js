// CODE here for your Lambda Classes
"use strict";


class Person {
	constructor (props) {
		this.name = props.name;
		this.age = props.age;
		this.location = props.location;
		this.gender = props.gender;
	}

	speak () {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
	}
}


class Instructor extends Person {
	constructor (props) {
		super(props);
		this.specialty = props.specialty;
		this.favLanguage = props.favLanguage;
		this.catchPhrase = props.catchPhrase;
	}

	demo (subject) {
		console.log(`Today we are learning about ${subject}`);
	}

	grade (student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
	}
}


class Student extends Person {
	constructor (props) {
		super(props);
		this.previousBackground = props.previousBackground;
		this.className = props.className;
		this.favSubjects = props.favSubjects;
	}

	listsSubjects () {
		console.log('My favorite subjects are:');
		this.favSubjects.forEach(x => console.log(x));
	}

	PRAssignment (subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}

	sprintChallenge (subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
	}
}


class ProjectManager extends Instructor {
	constructor (props) {
		super(props);
		this.gradClassName = props.gradClassName;
		this.favInstructor = props.favInstructor;
	}

	standUp (channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!`);
	}

	debugsCode (student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
	}
}



const fred = new Instructor({
	name: 'Fred',
	location: 'Bedrock',
	age: 37,
	gender: 'male',
	favLanguage: 'JavaScript',
	specialty: 'Front-end',
	catchPhrase: 'Don\'t forget the homies'
});


const kiki = new ProjectManager({
	name: 'Kiki',
	location: 'Seattle',
	age: 31,
	gender: 'female',
	favLanguage: 'Python',
	specialty: 'Back-end',
	catchPhrase: 'Don\'t make me come in there!',
	gradClassName: 'WEBPT1',
	favInstructor: 'Fred'
});


const susan = new Student({
	name: 'Susan',
	location: 'Berkley',
	age: 23,
	gender: 'female',
	previousBackground: 'high school diploma',
	className: 'Machine Learning',
	favSubjects: ['Linguistics', 'Neurobiology']
});


console.log('');

susan.speak();
susan.listsSubjects();
susan.PRAssignment('React');
susan.sprintChallenge('JavaScript');

console.log('');

fred.speak();
fred.demo('Calculus');
fred.grade(susan, 'Intro Quantum Mechanics');

console.log('');

kiki.speak();
kiki.standUp('webpt2_kiki');
kiki.debugsCode(susan, 'traveling salesman problem');


