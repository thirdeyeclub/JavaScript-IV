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

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  fred(speak);