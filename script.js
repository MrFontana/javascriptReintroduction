//Variables

var important = 'Coffee';
console.log(inportant);

//Data types

// String, Number, Boolean, Null, Undefined, false, NaN

var first = 1;

console.log(typeof(important)); //outputs string

console.log(typeof(first)); //outputs number

/*Reserved Javascript Keywords

break, do, instanceof, typeof, case, else, new, var, catch, finally, return, void, continue, for, switch, while, debugger, function, this, with, default, if, throw, delete, in, try, class, enum, extends, super, const, export, import

*/

//some string methods and properties

//length - property
//toUppercase() - methods end with parenthesis
//toLowerCase()
//charAt(position)
//indexOf(substring)

var sentence = "A sentence is a string.";

console.log(sentence.length);
// 23

console.log(sentence.toUpperCase());
// "A SENTENCE IS A STRING."

console.log(sentence.toLowerCase());
// "a sentence is a string"

console.log(sentence.charAt(0));
// "A"

console.log(sentence.indexOf("is");
// 11

console.log(sentence);
// "A sentence is a string"

//Some string search methods

//replace(orig, new)
//substring(start, end) takes a starting point and an ending point
//subtr(start, length) takes a starting point and a length of characters to replace.

console.log(sentence.replace("sentence", "word"));

console.log(sentence.substring(2, 10));

console.log(sentence.substr(2, 8));
//outputs same values but substr will continue to the end of the string if the second value isnt specified

//Number Variables

//Al numbers are floating point values in JS


var integer = 1;
var float = 1.0;
console.log(integer == float);
true


var number1 = 123;
var number2 = number1;

console.log(number1);
console.log(number2);

number2 = 456;

console.log(number1);
console.log(number2);


//parseInt() - pull out the integer value, or whole number value from a floating point variable number
//parseFloat() pull out the floating value of a number to assert...
//toString() - convert number to a string. takes value of number and outputs as string between quotes
//toFixed() - creates a string out of the value of a number but limits it to a certain number of digits passed the decimal point
//toPrecision() - what


// console.log(parseInt(example, 10));
//passing 10 ensures it is processed in base10. if you dont pass the 10 it might process in another base


var example = 5.5;

console.log(parseInt(example, 10));
//converts to 5

console.log(parseFloat(example));
//shows 5.5

console.log(example.toString());
//"5.5"

console.log(example.toFixed(2));
//"5.50" presents 2 digits after the decimal

console.log(example.toPrecision(3));
//"5.50" presents 3 digits total


//Booleans


var value1 = 1;
var value2 = 2;

var same = (value1 == value2);
console.log(same);
//outputs false

comparing with == forces the types to match
//they'll be converted to the same data types before the comparison happens

comparing with === preserves the types
//this preserves the data types between the two variables

var value1 = 1;
var value2 = '1';
var same = (value1 == value2);
var exact = (value1 === value2);

console.log(same);
// true (coerced both values to Strong type)

console.log(exact);
// false (maintained value)

== (match with coercion)
=== (exact match)
> (greater than)
>= (greater than or equal to)
< (less than)
<= less than or equal to)
!= (not a match)

var number1 = 1;
var number2 = 2;

var same = (number1 == number2);
var exact = (number1 === number2);
var greater (number1 > number2);
var less = (number1 <  number2);
var notEqual = (number1 != number2);

console.log(same);
//false

console.log(exact);
//false

console.log(greater);
//false

console.log(less);
//true

console.log(notEqual);
//true



//reference types

//array

arrays for sequential values

var words = ['This', 'is', 'an', 'array'];
console.log(words);

var words1 = ['This', 'is', 'an', 'array'];
var words2 = words1;

console.log(words1);
console.log(words2);

words2[0] = 'That';

console.log(words1);
console.log(words2);


console output

["This", "is", "an", "array"]
["This", "is", "an", "array"]
["That", "is", "an", "array"]
["That", "is", "an", "array"]

var things = [];
var words = ['another', 'array'];

things[0] = words;
things[2] = 2;
things[3] = true;

console.log(things);

console.log(typeof(things[0]));
//"object"
console.log(typeof(things[1]));
//"undefined"
console.log(typeof(things[2]));
//"number"
console.log(typeof(things[3]));
//"boolean"

//Accessors Return Values

// length
// toString()
// join()

// Mutators change arrays

// reverse()
// sort()
// push()
// pop()

var words = ['these', 'are', 'some', 'words'];

console.log(words.length);
// 4
console.log(words.reverse());
// ["words", "some", "are", "these"]

console.log(words.sort());
// ["are", "some", "these", "words"]

console.log(words.toString());
// "are,some,these,words"

console.log(words.join(" # "));
// "are # some # these # words"

console.log(words.push('augmented'));
// 5

console.log(words.pop());
// "augmented"

console.log(words);
// ["are", "some", "these", "words"]


// OBJECTS

var toy;

toy = {
	"color": "red",
	"size": 5,
	"soft": true
};

console.log(toy);
// [object Object] {
//   color: "red",
//   size: 5,
//   soft: true
// }
console.log(toy["color"]);
// "red"

console.log(toy.color);
// "red"


//OUTPUT


//  var toy = {};

// toy.name = 'Cardboard box';

// toy.tags = ['imagination', 'recyclable', 'cats'];

// toy.size = {
//   'units': 'inches',
//   'width': 10,
//   'height': 5,
//   'depth': 3
// };

// toy.quantity = 2;

// console.log(toy.tags[1]);

// console.log(toy.size.units);

// "recyclable"
// "inches"

//Order Of Operations

//Parenthesis
//Incrementary/Unary
// Multiply/Divide/Modulus
// Add/Subtract

// var myObject = {
//   'color': 'red',
//   'size': 5
// };

// var newObject = myObject;

// console.log(myObject.color);
// console.log(newObject.color);

// newObject.color = 'blue';

// console.log(myObject.color);
// console.log(newObject.color);

// var myObject = {
//   'color': 'red',
//   'size': 5
// };

// var newObject = myObject;

// console.log(myObject.color);
// console.log(newObject.color);

// newObject.color = 'blue';

// console.log(myObject.color);
// console.log(newObject.color);

// var firstNumber = 4;
// var secondNumber = 1000;
// var word = 'hello';

// firstNumber += secondNumber;
// += both adds and assigns at the same time.
// so the value of firstNunber is now 1004

// -= both subtracts and assigns at the same time

console.log(firstNumber);

var arr1 = [1, 2];
var arr2 = [1, 2];
var obj1 = {
  'color': 'red'
};
var obj2 = {
  'color': 'red'
};

console.log(arr1 == arr1);
//true
console.log(arr1 == [1, 2]);
//false
console.log(arr1 == arr2);
//false

arr2 = arr1;

console.log(arr1 == arr2);
//true

console.log(obj1 == obj1);
//true
console.log(obj1 == {'color': 'red'});
//false
console.log(obj1 == obj2);
//false

obj2 = obj1;
console.log(obj1 == obj2);
//true

var aNumber = 5;
var aString = '5';
var truth = true;
var falsehood = false;
var anObject = {
  'color': 'red'
};

console.log(aNumber == aString);
//true, two were coerced to be the same variable type.
//the string could be converted into a number, it was
//possible to say the values avcutally matched

console.log(truth == 1);
//true, 1 = true, 0 = false

console.log(falsehood == 0);
//true

console.log(anObject.toString());
//[object Object]

console.log('[object Object]' == anObject);
//true

var aNumber = 5;
var aString = '5';

console.log(aNumber == aString);
//true
console.log(aNumber === aString);
//false

var firstNumber = 5;
var secondNumber = 10;
var numberString = '5';
var firstWord = 'Hello';
var secondWord = 'World';

console.log(firstNumber != secondNumber);
//true
console.log(firstNumber != 5);
//false
console.log(firstNumber != numberString);
//false
console.log(firstNumber !== numberString);
//true useing EXACT match
console.log(firstWord != secondWord);
//true
console.log(firstWord != 'Hello');
//false
var firstNumber = 5;
var secondNumber = 10;
var numberString = '5';

console.log(firstNumber > secondNumber);
//false
console.log(firstNumber < secondNumber);
//true
console.log(firstNumber >= 5);
//true
console.log(firstNumber <= numberString);
//true

var firstWord = 'Hello';
var secondWord = 'World';
var thirdWord = 'hello';
var fourthWord = 'help';

console.log(firstWord > secondWord);
//false
console.log(firstWord < secondWord);
//true
console.log(firstWord >= 'Hello');
//true
console.log(firstWord > thirdWord);
//false
console.log(firstWord < thirdWord);
//true
console.log(thirdWord > fourthWord);
//false. 'hell' is higher in the alphabet than 'help'

//AND OPERATOR

var truth = true;
var falsehood = false;
var firstWord = 'Hello';
var secondWord = 'World';

console.log(truth && truth);
//true
console.log(truth && falsehood);
//false. any value in a comparison separated by ampersands returns false, then the
//return value will always be false
console.log((3 < 4) && ('Apple' < 'Banana'));
//true
console.log(firstWord && secondWord);
//'World'. you get the last true value that is not a boolean of the true statement.
//this means true
console.log(secondWord && firstWord);
//'Hello'

//OR OPERATOR

var truth = true;
var falsehood = false;
var firstWord = 'Hello';
var secondWord = 'World';

console.log(falsehood || falsehood);
//false. if either falsehood or falsehood is true. return true.
//falsehood and falsehood are false. returns false.
console.log(truth || falsehood);
//true. if either truth or falsehood is true. return true.
console.log((3 < 4) || ('Banana' > 'Apple'));
//true
console.log(firstWord || secondWord);
//'Hello'. returns the first true value thats encountered
console.log(secondWord || firstWord);
//'World

//NOT OPERATOR

var truth = true;
var falsehood = false;

console.log(!truth);
//false
console.log(!falsehood);
//true
console.log(!(3 < 4));
//false
console.log(!(3 < 4) || !('Banana' < 'Apple'));
//true

//Logical Not For Primitive Variables
//The boolean value of any non-empty and non-zero String or Number with Not is false
//The boolean value of an empty string, a zero value, or a null or undefined variable with Not
//is true

var word = 'Hello';
var empty = '';
var negative = -10;
var zero = 0;
var nullValue = null;
var notDefined;

console.log(!word);
//false
console.log(!empty);
//true
console.log(!negative);
//false
console.log(!zero);
//true
console.log(!nullValue);
//true
console.log(!notDefined);
//true

console.log(!!word);
//true
console.log(!!empty);
//false
console.log(!!negative);
//true
console.log(!!zero);
//false
console.log(!!nullValue);
//false
console.log(!!notDefined);
//false

var truth = true;
var falsehood = false;

console.log(truth && truth && truth);
//true
console.log(truth && falsehood && truth);
//false
console.log(truth || falsehood || truth);
//true
console.log(truth && falsehood || truth);
//truth
console.log(truth || falsehood && truth);
//true
console.log(truth || falsehood && falsehood);
//true
console.log(truth && falsehood || falsehood);
//false

//BLOCK STATEMENTS
//statements are a set of instructions that tells the computer how to perform an action
//usually begins with a keyword or variable
//always ends with a semicolon
//executed sequentially ((for the most part))
//may be grouped in a block with curly braces

//Why group statements?
//programs may need to do the same set of steps over and over

//BLOCK STATEMENTS FOR ITERATION
//group statements to be repeated in blocks
//use control flow statements to execute them

//PSEUDO CODE
var colors = ['red', 'green', 'blue'];
var question;

FOR EACH COLOR IN COLORS {
	question = 'Do you like ' + colors[THE CURRENT COLOR] + '?';
	console.log(question);
	//  'Do you like red?' (first time)
	//  'Do you like green?' (second time)
	//  'Do you like blue?' (third time)
}

//BLOCK STATEMENTS FOR CONDITIONS
//only execute a block if a condition is true

var color = ['red', 'green', 'blue'];
var selection = 0;

console.log("You chose " + colors[selection]);
// 'You chose red'

//PSEUDO CODE
IF THE SELECTION IS RED {
		console.log('Just like the Red Lanterns')
	} OTHERWISE, IF THE SELECTION IS GREEN {
		console.log('Just like the Green Lanterns')
	} OTHERWISE, IF THE SELECTION IS BLUE {
		console.log('Just like the Blue Lanterns')
	} OTHERWISE {
		console.log('whatever...')
	}
}

//BOOLEAN CONDITIONS
//testing the boolean state of an expression to decide whether to execute a block of code

var color = prompt('red, green or blue?')

color = color.toLowerCase();

console.log('You chose ' + color);

if (color == 'blue') {
  console.log('Blue Lanterns');
} else if (color == 'red') {
  console.log('Red Lanterns');
} else if (color == 'green') {
  console.log('Green Lanterns')
} else {
  console.log('thats not what I asked...')
}

console.log(color.toLowerCase());

//FOR LOOPS

//Pseudo code for itereation

var color = ['red', 'green', 'blue'];
var question;

FOR EACH COLOR IN COLORS {
	question = 'Do you like ' + colors[THE CURRENT COLOR] + '?';
	console.log(question);
	//  'Do you like red?' (first time)
	//  'Do you like green?' (second time)
	//  'Do you like blue?' (third time)
}

//FOUR ELEMENTS OF A STATEMENT

//initial condition
//final condition
//itereator
//block of code to execute

var colors = ['red', 'green', 'blue'];
var question;
var counter;

//counter starts at 0, and needs to be LESS THAN the length of the array ' colors',
//the counter will continue to each next item as long as there is one to move to
for (counter = 0; counter < colors.length; counter++) {
  question = 'Do you like ' + colors[counter] + '?';
  //every iteration changes the value of 'counter' until its greater than the length of
  //the array
  console.log(question);
  //"Do you like red?"
  //"Do you like green?"
  //"Do you like blue?"
}

//TERMINAL CONDITIONS

//how does the loop know when its done?

//counter < colors.length;
//as long as the value returned by the terminal condition
//is true, the loop will continue executing. once that value
//returns false, the loop stops executing and continues on to whatever is passed into the code

//ITERATION
//what changes during each loop to move the process forward?

//counter++
// the iteration part of a for loop tells what changes between
//each loop in order to move the process forward. in the iterator you
//can change anything you'd like.

//BREAK OUT OF A FOR LOOP
//use a break statement to interupt the loop before the terminal condition

var counter = 0;

for (;;) { //super not good, dont use this ever, or use it with a break statement
  console.log('This could go on forever ' + counter) ;
  if (counter++ > 99) {
    break;
    // this tells the computer to break out of this loop when the counter gets to 100
  }
}

//MULTIPLE  POSSIBLE OUTCOMES
//a pattern of if and else statements to test a single expression

var color = 'blue';

switch (color) {
  case 'blue':
    console.log('Blue Lanterns');
    break;
  case 'red':
    console.log('Red Lanterns');
    break;
  default:
    console.log('ok then...');
}

var compliment;
var adjectives = [];
var adjectiveCount = 4 ;

switch(adjectiveCount) {
  case 4:
    adjectives.push('exquisite');
  case 3:
    adjectives.push('fantastic');
  case 2:
    adjectives.push('amazing');
  default:
    adjectives.push('great');
}

compliment = 'You have ' + adjectives.join(', ') + ' taste!';

console.log(compliment);

//FOR IN STATEMENT

var toy = {
  'color': 'red',
  'size': 'large',
  'shape': 'round'
};

var toyProperties = Object.keys(toy);
console.log(toyProperties);
var counter;
var style;

for (counter = 0; counter < toyProperties.length; counter++) {
  style = toyProperties[counter];
  console.log('The ' + style + ' is ' + toy[style] + '.');
}

//outputting the style: color, size, shape

//FOR IN SYNTAX FOR OBJECT PROPERTIES

//the For...in iterator loops through each property, assigning the property name to the variable

var toy = {
  'color': 'red',
  'size': 'large',
  'shape': 'round'
};

for (style in toy) {
  console.log('The ' + style + ' is ' + toy[style] + '.');
}

//style is being assigned to a different key in the toy object each time it goes through the loop.
//Using that key to pull out the name of the key and then the value stored inside that key

//DONT USE THE DOT SYNTAX IN LOOPS
//the dot syntax will not recognize the variable as a property. it will look for a name

//CALLING A BLOCK OF CODE

//iterators loop over blocks of code
//flow control branches to blocks of code

//FUNCTIONS

//by giving a block of code a name, you can call it whenever you want to; like creating a new keyword just for your code

function sayHi() {
  console.log('Hi');
}

sayHi();

//DECLARING AND USING FUNCTION

//can be defined after code that uses them
//can use and change variables that existed when the function was defined...be careful

var color;

console.log(color);
//undefined
changeColor();
console.log(color);
//green
changeColor();
console.log(color);
//red
changeColor();
console.log(color);
//blue

function changeColor() {
  switch(color) {
    case 'red':
      color = 'blue';
      break;
    case 'green':
      color = 'red';
      break;
    default:
      color = 'green';
  }
}

//THE RESULT OF CALLING A FUNCTION

//without parenthesis, code of the function is returned
//with parenthesis, function is executed
//return value of a function is undefined unless specified

var color;

console.log(changeColor());
//undefined
console.log(color);
//green


function changeColor() {
  switch(color) {
    case 'red':
      color = 'blue';
      break;
    case 'green':
      color = 'red';
      break;
    default:
      color = 'green';
  }
}

//SPECIFYING A RETURN VALUE

//only one return value for each execution
//must return a value or the result will return undefined

var color;

console.log(changeColor());
//undefined
console.log(color);
//green
changeColor();
console.log(color);
//red

function changeColor() {
  switch(color) {
    case 'red':
      color = 'blue';
      break;
    case 'green':
      color = 'red';
      break;
    default:
      color = 'green';
  }
  return(color);
}

var color;

console.log(color);
//undefined
color = changeColor();
console.log(color);
//green
color = changeColor();
console.log(color);
//red

function changeColor() {
  switch(color) {
    case 'red':
      return 'blue';
    case 'green':
      return 'red';
    default:
      return 'green';
  }
  console.log('nothing will be shown');
}

changeColor();
console.log(changeColor());
//blue

//FUNCTION ARGUMENTS
//passing arguments to functions

//variables to be used by a function can be passed as arguments between parenthesis

var color = 'red';

function showItem(item) {
  console.log(item);
}

showItem(color);
//red

//PASS MULTIPLE NAMED ARGUMENTS
//arguments can be any type. refer to them by parameter name when defining the function

var word = 'Hello';
var fontanimals = ['Kevin', 'Meghan', 'Eli', 'Jakey'];

function greeter(str, arr) {
  var counter;
  for(counter = 0; counter < arr.length; counter++) {
    console.log(str + ' ' + arr[counter]);
  }
}

greeter(word, fontanimals)
// "Hello Kevin"
// "Hello Meghan"
// "Hello Eli"
// "Hello Jakey"

//DESIGN AND NAME FOR REUSE

//functions should be
//flexible
//reusable
//independent

//name functions to support flexible application

var word = 'Hello';
var fontanimals = ['Kevin', 'Meghan', 'Eli', 'Jakey'];
var salutation = 'Goodbye'
var target = ['Sun', 'Moon'];


function greeter(str, arr) {
  var counter;
  for(counter = 0; counter < arr.length; counter++) {
    console.log(str + ' ' + arr[counter]);
  }
}

greeter(word, fontanimals);
greeter(salutation, target);
//"Goodbye Sun"
//"Goodbye Moon"
greeter(word, target);
//"Hello Sun"
//"Hello Moon"

//FUNCTIONS CALLING FUNCTIONS

var testString = 'hello world';
console.log(titleCase(testString));

function titleCase(str) {
  var strArray = str.split(' ')
  var counter;
  for (counter = 0; counter < strArray.length; counter++) {
    strArray[counter] = capitalize(strArray[counter]);
  }
  return strArray.join(' ');
}

function capitalize(str) {
  var result = [];
  result[0] = str.charAt(0).toUpperCase();
  result[1] = str.substring(1);
  return result.join('')
}
//Hello World

//SCOPE

var word = 'Hello';
var fontanimals = ['Kevin', 'Meghan', 'Eli', 'Jakey'];

function greeter(str, arr) {
  var counter;
  for(counter = 0; counter < arr.length; counter++) {
    console.log(str + ' ' + arr[counter]);
  }
  console.log(counter);
  //this works inside the scope of the function
}

greeter(word, fontanimals);
console.log(counter);
//"error"
//"ReferenceError: counter is not defined
//    at soxicowoma.js:15:38
//    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:13850
//    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:10792"
// counter is not a variable OUTSIDE the scope of the function

function example() {
  var local = 'Only available inside example()'; // with var
  global = 'Available anywhere once example() has been executed'; //without var
};


console.log(global);
// "error" (ReferenceError: local is not defined)

console.log(local);
// "error" (ReferenceError: local is not defined)

example();

console.log(local);
// "error" (ReferenceError: local is not defined)

console.log(global);
// "Also available any where

// Variable Scope is inherited One Way
//Functions inherit variables in the oparent scope

//BE SAFE: DECLARE VARIABLES FIRST

//Javascript hoists the variable declarations to the top of a scope.

//start each function or script by declaring any variables used

function predefined() {
  var before = 5; // declared and initialized
  var after = 10; // declared and initialized
  console.log(before + after);
}

function undefinedAfter() {
  var before = 5; // declared and initialized
  console.log(before + after);
  var after = 10; // initialized, declaration hoisted
}

function undeclaredAfter() {
  var before = 5; // declared and initialized
  console.log(before + after);
}

predefined();
// 15

undefinedAfter();
// NaN

undeclaredAfter();
// error: ReferenceError: after is not defined

//GLOBAL SCOPE

// all scripts share space in a global object. (window in browsers, global on the server)
var count = 5;

console.log(count);
// 5
console.log(window.count);
// 5
window.count = 10;

console.log(count);
// 10

// WHATS WRONG WITH GLOBAL SCOPE?
//different parts of the coe may reuse a common variable name (no matter how careful you think you're being).

//one script that uses a counter
var count = 5;

// another script that sets count based on a price
function thousands(price) {
  count = 1000 * price;
  return count;
}

// another script that uses count for an iterator
for (count = 0; count < 6; count++) {
  // do something
}

thousands(50);

//a bunch of code later....

console.log(count);
// could be anything

//WAYS TO ISOLATE VARIABLE SCOPE

//KEEP LOCAL VARIABLES OUT OF THE GLOBAL OBJECT
//functions - declaring them inside functions
//IIFE - wrap all of your code inside of an imediately invoked function expression
//custom objects - write your code inside of custom objevts that contain all of the methods youre going to be using and encapsulate them that way

// local to a function
function thousands(price) {
  var count = 1000 * price;
}

//immediately invoked function expressions
(function() { // start a function expression
  var count;
  for (count = 0; count < 10; count++) {
    //do something 10 times
  }
}()); // execute that function expression

// local to a private object (less safe)
var myApp = {};
myApp.count = 'Hello'.length;

console.log(count);
// error: ReferenceError: count is not defined

//FUNCTIONS IN THE GLOBAL SCOPE

//when you declare a function, you add it to the global scope

function greeter(str, arr) {
	var counter;
	for (counter = 0; counter < arr.length; counter++) {
		console.log(str + ' ' + arr[counter]);
	}
}

console.log(window.greeter);
// the code of the function greeter

window.greeter('Hello', ['Fred', 'Judy']);
// Hello Fred
// Hello Judy

//PROTECTING THE GLOBAL SCOPE
//all the tricks for protecting the global scope of variables apply to functions

(function () {
  function greeter(str, arr) {
	var counter;
	for (counter = 0; counter < arr.length; counter++) {
		console.log(str + ' ' + arr[counter]);
      }
  }

  greeter('Hello', ['Fred', 'Judy']);
  // Hello Fred
  // Hello Judy
}());

console.log(window.greeter);
//undefined

window.greeter('Hello', ['Fred', 'Judy']);
// error TypeError: window.greeter is not a function

//FUNCTIONS DECALRED IN FUNCTIONS

//a function can declare local functions, with their own local scope

//PASSING FUNCTIONS TO FUNCTIONS

//a function can take an anonymous function, declared inline with or without a name, as an argument

(function () {
  function greeter(str, arr, display) {
	var counter;
    var phrase;
	for (counter = 0; counter < arr.length; counter++) {
      phrase = str + ' ' + arr[counter];
      console.log(display(phrase));
      }
  }

  greeter('Hello', ['Fred', 'Judy'], function(str) {
  	return str;
  });
  // Hello Fred
  // Hello Judy

  greeter('Hello', ['Fred', 'Judy'], function(str) {
  	return str.toUpperCase() + '!!!!!';
  });
  // HELLO FRED!!!!!
  // HELLO JUDY!!!!!

}());

//ASSIGNING FUNCTIONS TO VARIABLES

//an anonymous functions can also be assigned to a variable, just like any other value

(function () {
  var greeter = function(str, arr) {
	var counter;
    var phrase;
	for (counter = 0; counter < arr.length; counter++) {
      phrase = str + ' ' + arr[counter];
      console.log(phrase);
      }
  };

  greeter('Hello', ['Fred', 'Judy']);

}());

//PASSING FUNCTIONS AS VARIABLES
// you can pass a function to another function as a variable for cleaner, more modular code

var greeter = function(str, arr, display) {
  var counter;
  var phrase;
  for (counter = 0; counter < arr.length; counter++) {
    phrase = str + ' ' + arr[counter];
    console.log(display(phrase));
  }
};

var say = function(str) {
  return str;
};

var shout = function(str) {
  return str.toUpperCase() + '!!!';
};

greeter('Hello', ['Fred', 'Judy'], say);
// "Hello Fred"
// "Hello Judy"
greeter('Hello', ['Fred', 'Judy'], shout);
// "HELLO FRED!!!"
// "HELLO JUDY!!!"

//by creadting small named functions to variables you can create very reusable code

//FUNCTIONS TO CONSTRUCT OBJECTS

//functions can also be used as object templates, with the new statement
//first letter of constuctor functions should always be CAPITALIZED
var Example = function(str) {
  this.name = str;
};

var exampleFred = new Example('Fred');

var exampleJudy = new Example('Judy')

console.log(exampleFred);
// [object Object] {
//   name: "Fred"
// }

console.log(exampleFred.name);
// "Fred"

console.log(exampleJudy.name);
// "Judy"

// ADDING METHODS TO CONSTRUCTORS
//properties and methods assigned to this in a constructors are public

var Example = function(str) {
  this.name = str;
  this.greet = function() {
    return 'Hello ' + this.name;
  };
};

var exampleFred = new Example('Fred');
var exampleJudy = new Example('Judy')

console.log(exampleFred.greet());
// "Hello Fred"

console.log(exampleJudy.greet());
// "Hello Judy"

//PRIVATE AND PUBLIC PROPERTIES
//variables declared with var in a constructor are private to child objects and their functions

var Example = function(str) {
  var special = 'Judy';
  this.name = str;
  this.greet = function() {
    if (this.name === special) {
      return 'HEY WUDDUP JUDES!?';
    } else {
      return 'Hello ' + this.name;
    }
  };
};

var exampleFred = new Example('Fred');
var exampleJudy = new Example('Judy')

console.log(exampleFred.greet());
// "Hello Fred"
console.log(exampleJudy.greet());
// "HEY WUDDUP JUDES!?"

//challenge word puzzle

//template: I like [verb]. My favorite [noun] is [adjective] [noun]. That's what makes me [adjective].

// function wordParty(str1, str2, str3, str4, str5) {
// 	return 'I like ' + str1 + '. My favorite ' + str2 + ' is ' + str3 + ' ' + str4 + '. That\'s what makes me ' + str5;
// }

// wordParty('gaming', 'game', 'fluffy', 'dark souls', 'really angry');

function wordParty(verb, noun, adjective, noun2, adjective2) {
	var verb = prompt('enter a verb');
	var noun = prompt('enter a noun');
	var adjective = prompt('enter an adjective');
	var noun2 = prompt('enter another noun');
	var adjective2 = prompt('enter another adjective');

    return alert('I like ' + verb + '. My favorite ' + noun + ' is ' + adjective + ' ' + noun2 + '. Thats what makes me ' + adjective2);
};

console.log(wordParty());
