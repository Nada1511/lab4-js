/////////////////// using constructor function//////////////////////////////////////
function Person(name, money, sleepMood, healthRate) {
    this.fullName = name;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }
  
  Person.prototype.sleep = function (hours) {
    if (hours === 7) this.sleepMood = 'happy';
    else if (hours < 7) this.sleepMood = 'tired';
    else this.sleepMood = 'lazy';
  };
  
  Person.prototype.eat = function (meals) {
    if (meals === 3) this.healthRate = 100;
    else if (meals === 2) this.healthRate = 75;
    else if (meals === 1) this.healthRate = 50;
  };
  
  Person.prototype.buy = function (items) {
    if (items === 1) this.money -= 10;
  };
  
  const person1 = new Person('John Doe', 100, 'happy', 80);
  person1.sleep(7);
  person1.eat(2);
  person1.buy(1);
  
  console.log(person1);


///////////////////////// using classes //////////////////////////////////////////
class Person {
    constructor(name, money, sleepMood, healthRate) {
      this.fullName = name;
      this.money = money;
      this.sleepMood = sleepMood;
      this.healthRate = healthRate;
    }
  
    sleep(hours) {
      if (hours === 7) this.sleepMood = 'happy';
      else if (hours < 7) this.sleepMood = 'tired';
      else this.sleepMood = 'lazy';
    }
  
    eat(meals) {
      if (meals === 3) this.healthRate = 100;
      else if (meals === 2) this.healthRate = 75;
      else if (meals === 1) this.healthRate = 50;
    }
  
    buy(items) {
      if (items === 1) this.money -= 10;
    }
  }
  
  const person2 = new Person('Jane Doe', 150, 'happy', 90);
  person2.sleep(6);
  person2.eat(3);
  person2.buy(1);
  
  console.log(person2);

  ///////////////////////// using objects linking to other objects (OLOO)////////////////////
  const PersonMethods = {
    sleep(hours) {
      if (hours === 7) this.sleepMood = 'happy';
      else if (hours < 7) this.sleepMood = 'tired';
      else this.sleepMood = 'lazy';
    },
    eat(meals) {
      if (meals === 3) this.healthRate = 100;
      else if (meals === 2) this.healthRate = 75;
      else if (meals === 1) this.healthRate = 50;
    },
    buy(items) {
      if (items === 1) this.money -= 10;
    },
  };
  
  const createPerson = (name, money, sleepMood, healthRate) => {
    const person = Object.create(PersonMethods);
    person.fullName = name;
    person.money = money;
    person.sleepMood = sleepMood;
    person.healthRate = healthRate;
    return person;
  };
  
  const person3 = createPerson('Bob', 80, 'happy', 70);
  person3.sleep(8);
  person3.eat(2);
  person3.buy(1);
  
  console.log(person3);


  //////////////////////////////////using factory function ///////////////////////////

const createPersonFactory = (name, money, sleepMood, healthRate) => {
  return {
    fullName: name,
    money: money,
    sleepMood: sleepMood,
    healthRate: healthRate,
    sleep(hours) {
      if (hours === 7) this.sleepMood = 'happy';
      else if (hours < 7) this.sleepMood = 'tired';
      else this.sleepMood = 'lazy';
    },
    eat(meals) {
      if (meals === 3) this.healthRate = 100;
      else if (meals === 2) this.healthRate = 75;
      else if (meals === 1) this.healthRate = 50;
    },
    buy(items) {
      if (items === 1) this.money -= 10;
    },
  };
};

const person4 = createPersonFactory('Alice', 120, 'happy', 85);
person4.sleep(7);
person4.eat(3);
person4.buy(1);

console.log(person4);




