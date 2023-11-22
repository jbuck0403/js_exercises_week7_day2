// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

function orderWeight(str) {
  arr = [];
  str.split(" ").forEach((element) => {
    if (element == " " || element == "") return;
    weight = element.split("").reduce((acc, digit) => {
      return acc + Number(digit);
    }, 0);
    arr.push([element, weight]);
  });
  arr.sort((a, b) => {
    if (a[1] != b[1]) {
      return a[1] - b[1];
    } else {
      return a[0].localeCompare(b[0]);
    }
  });
  return arr.map((element) => element[0]).join(" ");
}

//https://www.codewars.com/kata/52c31f8e6605bcc646000082
function twoSum(numbers, target) {
  for (let idx in numbers) {
    if (
      numbers.includes(target - numbers[idx]) &&
      numbers.indexOf(target - numbers[idx]) != idx
    ) {
      return [idx, numbers.indexOf(target - numbers[idx])];
    }
  }
}
//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [
    {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt",
    },
  ],
};

const displayFavorites = (obj, prev = null) => {
  if (prev && Array.isArray(obj)) console.log(prev);
  for (key in obj) {
    if (typeof obj[key] == "string")
      console.log(`${Array.isArray(obj) ? "\t" : `${key}:`} ${obj[key]}`);
    else {
      displayFavorites(obj[key], key);
    }
  }
};

displayFavorites(person3);

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

class extendedString {
  title(name) {
    return name
      .split(" ")
      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
      .join(" ");
  }
}

// Create our Person Class
class Person extends extendedString {
  constructor(name, age) {
    super();
    this.name = this.title(name);
    this.age = age;
  }

  printInfo = () => {
    console.log(
      `${this.name} is ${this.age} year${this.age == 1 ? "" : "s"} old`
    );
  };

  getOlder = () => {
    this.age++;
  };
}

const person = new Person("tony danza", 10);
const otherPerson = new Person("phil", 11);
person.printInfo();
person.getOlder();
person.getOlder();
person.getOlder();
person.getOlder();
person.printInfo();
otherPerson.printInfo();
otherPerson.getOlder();
otherPerson.getOlder();
otherPerson.getOlder();
otherPerson.printInfo();

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age

// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const grabErgastData = async () => {
  const response = await fetch(
    "http://ergast.com/api/f1/2008/5/driverStandings.json"
  );

  if (response.ok) {
    const data = await response.json();

    console.log(data);
  } else return response.ok;
};

grabErgastData();
