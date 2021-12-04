class Person {
    constructor(name, age, voice) {
        this.name = name;
        this.age = age;
        this.voice = voice;
    }
}

var firstPerson = new Person("Maciek", 37, () =>
    console.log("wrrr"));

var secondPerson = new Person("Basia", 40, function () {
    console.log("uuuuuu")});
    
var array = [];
array.push(firstPerson, secondPerson);

// display name and age
array.forEach(element => {
    console.log('Name:' + element.name + ', Age:' + element.age);
});

// display voice
array.forEach((p)=>{p.voice()})