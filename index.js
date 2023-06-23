class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Flat {
  residents = [];

  addResident(person) {
    this.residents.push(person);
  }

  getResident() {
    return this.residents.map(function(resident) {
      return resident.name;
    });
  }
}

class House {
  constructor(maxFlats) {
    this.maxFlats = maxFlats;
    this.flats = [];
  }

  addFlat(person) {
    return this.flats.length < this.maxFlats ? this.flats.push(person) : console.log('Limit of apartments exceeded!');
  }
}

const george = new Person('George', 'male');
const hanna = new Person('Hanna', 'female');
const roger = new Person('Roger', 'male');

const flatOne = new Flat();
const flatSecond = new Flat();
const flatThird = new Flat();

flatOne.addResident(george);
flatSecond.addResident(hanna);
flatSecond.addResident(roger);

console.log(flatOne.getResident());
console.log(flatSecond.getResident());

const house = new House(2);

house.addFlat(flatOne);
house.addFlat(flatSecond);
house.addFlat(flatThird);

console.log(house.flats);
