// //refer week 2 day 3 slide

// // Use an array within an object within an object within an object

// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
//     companion: {
// 		name: "Velma",
// 		type: "Bat",
//         companion: {
//             name: "VAnaessa",
//             type: "Legal",
//             belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
//         }
// 	}
// }

// for (let i=0; i < adventurer.belongings.length; i++) {
// 	console.log(adventurer.belongings[i]);
// }

// //Access the companion object

// console.log(adventurer.companion.companion.name);

// //Use an array of objects

// const movies = [ { title: "Tokyo Story" },  
//                  { title: "Paul Blart: Mall Cop" }, 
//                  { title: "L'Avventura" } 
// ];
// console.log(movies[0].title);

// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }

// //Combine objects, arrays, and functions
// // property for an object that is an array
// const foo = {
//     someArray:[1,2,3]
// };
// foo.someArray[0]; 

// //property for an object that is an object
// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// };
// foo.someObject.someProperty; 

// //property for an object that is a function (method)

// const foo = {
//     someMethod:()=>{
//         console.log('Hi all');
//     }
// };

// foo.someMethod();

// //store an object in an array

// const foo = [{someProperty:'weeee'}, 2, 3];

// console.log(foo[0].someProperty);

// //store an array in an array

// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];

// foo[1][2]; 

// //store function in array

// const foo = [
//     1,
//     "hi",
//     ()=>{
//         console.log('happy');
//     }
// ];

// foo[2]();

// //class and it uses

// //addind the player(class)

// const player = {
//     name: 'Josh the great',
//     health: 1000,
//     power: 1000,
//     stamina: 1000
//   }

//   const bigBadBoss = {
//     name: 'Magnardo the Merciless',
//     health: 1000000000000000000,
//     power: 10000000000000000,
//     stamina: Infinity
//   }

//   //function for the class
//   const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newEnemy = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newEnemy
//   }
//   const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newPlayer = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newPlayer
//   }

//   //add method to class

//   class Character {
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite is a person');
//     }
//   }
  
//   const me = new Character();
//   const you = new Character();
//   me.greet('Ani');
//   me.walk();
//   you.greet('Ani');
//   you.walk();

//   //Set properties on an instance of a class


//   class Character {
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person');
//     }
//   }
  
//   const me = new Character();
//   const you = new Character();
//   console.log(me);
//   console.log(you);

//   //add some properties with a constructorfunction

//   class Character {
//     constructor () {
//       this.legs = 2;
//       this.arms = 2;
//       this.eyes = 'hazel';
//       this.hair = 'gray';
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person');
//     }
//   }
//   const me = new Character();
//   console.log(me);

// //practice to define a method that will alter that:

// class Character {
//   constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || true;
//   }
//   greet (otherCharacter) {
//     console.log('hi ' + otherCharacter + '!');
//   }
//   setHair (hairColor) {
//     this.hair = hairColor;
//   }
//   smite () {
//     console.log('I smite thee you vile person');
//   }
// }

// const me = new Character('Arthur', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
// console.log(you);
// you.setHair('red');
// console.log(you);

// //Objects interacting with other objects

// class Character {
//     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Greetings ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('I smite thee you vile person');
//     }
//   }
//   const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
//   const me = new Character('Arthur the Wavy', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
  
//   me.classyGreeting(you);
//   you.classyGreeting(me);

//   // Objects interacting with other objects

//   class Character {
//     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Greetings ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('I smite thee you vile person');
//     }
//   }
//   const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
//   const me = new Character('Arthur the Wavy', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
  
//   me.classyGreeting(you);
//   you.classyGreeting(me);

//   //Make a class inherit attributes from a "parent class"

//   class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || true;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Howdy ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('i smited thee.');
//     }
  
//   }
//    const hobbit = new Character('Mr Baggins', 33, 'brown', 'black')
//   console.log(hobbit);

//   //refer the parent class' method and extend its original functionality:

//   class Hobbit extends Character {
//     steal () {
//       console.log('lets get away!');
//     }
//     greet (otherCharacter) {
//       console.log('Greetings ' + otherCharacter);
//     }
//     smite () {
//       super.smite();
//       this.steal();
//     }
//   }
//   const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
//   frodo.smite();
//   console.log(frodo);

  //JavaScript - OOP Factories (car)

  class Car {
    constructor (maker, serialNumber) {
      this.serialNumber = serialNumber;
      this.maker = maker
    }
    drive () {
      console.log('Vroom Vroom');
    }
  }
  
  const newCar = new Car('Mazda', 12345);
  console.log(newCar);

  // factory class that will make cars for us.

  class Factory {
    constructor (company) {
      this.company = company;
      this.cars = [];
    }
    generateCar () {
      const newCar = new Car(this.company, this.cars.length);
      this.cars.push(newCar);
    }
    findCar (index) {
      return this.cars[index];
    }
  }
  const tesla = new Factory('Tesla');
  tesla.generateCar();
  tesla.generateCar();
  tesla.generateCar();
  tesla.generateCar();
  console.log(tesla);
  console.log(tesla.findCar(0));

  //Now we can easily create another new factory that produces its own cars

  const porche = new Factory('Porche');
  porche.generateCar();
  porche.generateCar();
  console.log(porche);
  console.log(porche.findCar(0));

  