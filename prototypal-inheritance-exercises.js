// Function.prototype.inherits = function(parent) {
//   // 1. Make Surrogate function/class
//   // 2. Point Surrogate prototype to parent
//   // 3. Point child's (this) prototype to Surrogate
//   // 4. Set child.prototype.constructor to child
//   function Surrogate () {};
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// }
Function.prototype.inherits = function (ParentClass) {
  this.prototype = Object.create(ParentClass.prototype);
  this.prototype.constructor = ParentClass;
}

function MovingObject() { }

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);


// How would you test Function.prototype.inherits ? A few specs to consider:

// You should be able to define methods / attributes on MovingObject that ship and
// asteroid instances can use.
MovingObject.prototype.name = function() {
  console.log("moving object");
}
let astro = new Asteroid();
astro.name();


// Defining a method on Asteroid's prototype should not mean that a ship can call it.
Asteroid.prototype.tumble = function() {
  console.log('tumbling through the sky');
}
astro.tumble();
let shippy = new Ship();
// shippy.tumble();

// Adding to Ship or Asteroid's prototypes should not change MovingObject's prototype.

// The Ship and Asteroid prototypes should not be instances of MovingObject.
console.log(shippy.prototype instanceof MovingObject);
console.log(astro.prototype instanceof MovingObject);

// After you have written Function.prototype.inherits using the surrogate trick, refactor your solution using Object.create.Make sure to test that your updated solution works.
Function.prototype.inherits = function (parent) {
  // 1. Make Surrogate function/class
  // 2. Point Surrogate prototype to parent
  // 3. Point child's (this) prototype to Surrogate
  // 4. Set child.prototype.constructor to child
  function Surrogate() { };
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}


//   You'll be writing an inherits method again for Asteroids.
