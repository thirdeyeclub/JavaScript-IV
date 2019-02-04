//JS
class Person {
    constructor(trait){
        this.name = trait.name;
        this.age = trait.age;
        this.location = trait.location;
        this.gender = trait.gender;
    }
    speak(){
        return `Hello my name is ${this.name}. I am from ${this.location}`
    }
}

//test person!!
const neeko = new Person({
    name: 'neeko',
    location: 'River',
    age: 4,
    gender: 'lizard',
  });

  class Instructor extends Person{
      constructor(trait){
          super(trait);
          this.specialty = trait.specialty;
          this.favLangauge = trait.favLangauge;
          this.catchPrase = trait.catchPrase;
      }
      demo(subject) {
        return `Today we are learning about ${subject}`;}
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;}
  }

  //test instructer!!
const yogurt = new Instructor({
    name: 'Yogurt',
    location: 'Sand Palace',
    age: 420,
    gender: 'male',
    specialty: 'the swarts',
    favLangauge: 'sandscript',
    catchPrase: 'USE THE SWARTS!'
  });

  class Student extends Person{
      constructor(trait){
          super(trait);
          this.previousBackground = trait.previousBackground;
          this.className = trait.className;
          this.favSubject = trait.favSubject; 
      }
    listsSubjects() {
    return (this.favSubjects.map((subject) => {
            console.log(subject);
    }))
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate () {
        return `${this.name} has gained sufficient credits to graduate from Lambda School! We wish them all the best in paying off their ISAs!`;
}
     }

//test Student

const yeri = new Student({
    name: 'Yeri', 
    age : 18, 
    location: 'Indoors', 
    gender: 'M',
    previousBackground: 'Speznaught',
    className: 'WEB17',
    favSubjects: 'Place And Control'
});

class ProjectManager extends Instructor { 
    constructor (trait) {
        super(trait);
        this.gradClassName = trait.gradClassName;
        this.favInstructor = trait.favInstructor;
    }
    standUp (slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

//test PM

const mrf = new ProjectManager({
    name: 'MR.F', 
    age : 25, 
    location: 'Undiscloused location', 
    gender: 'M',
    specialty: 'the swarts',
    favLangauge: 'sandscript',
    catchPrase: 'USE THE SWARTS!'
    gradClassName: 'WEB -1',
    favInstructor: 'Josh'
} 