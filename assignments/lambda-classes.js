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