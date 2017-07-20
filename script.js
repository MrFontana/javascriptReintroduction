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

/*
var integer = 1;
var float = 1.0;
console.log(integer == float);
true
*/

/*var number1 = 123;
var number2 = number1;

console.log(number1);
console.log(number2);

number2 = 456;

console.log(number1);
console.log(number2);
*/

//parseInt() - pull out the integer value, or whole number value from a floating point variable number
//parseFloat() pull out the floating value of a number to assert...
//toString() - convert number to a string. takes value of number and outputs as string between quotes
//toFixed() - creates a string out of the value of a number but limits it to a certain number of digits passed the decimal point
//toPrecision() - what


// console.log(parseInt(example, 10));
//passing 10 ensures it is processed in base10. if you dont pass the 10 it might process in another base

/*
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
*/

//Booleans

/*
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

*/

//reference types

//array

/*arrays for sequential values

var words = ['This', 'is', 'an', 'array'];
console.log(words);

var words1 = ['This', 'is', 'an', 'array'];
var words2 = words1;

console.log(words1);
console.log(words2);

words2[0] = 'That';

console.log(words1);
console.log(words2);

/*
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


*/

//Accessors Return Values

// length
// toString()
// join()

// Mutators change arrays

// reverse()
// sort()
// push()
// pop()

// var words = ['these', 'are', 'some', 'words'];

// console.log(words.length);

// console.log(words.reverse());

// console.log(words.sort());

// console.log(words.toString());

// console.log(words.join(" # "));

// console.log(words.push('augmented'));

// console.log(words.pop());

// console.log(words);

// 4
// ["words", "some", "are", "these"]
// ["are", "some", "these", "words"]
// "are,some,these,words"
// "are # some # these # words"
// 5
// "augmented"
// ["are", "some", "these", "words"]

// OBJECTS

// var toy;

// toy = {
// 	"color": "red",
// 	"size": 5,
// 	"soft": true
// };

// console.log(toy);

// console.log(toy["color"]);

// console.log(toy.color);

// OUTPUT
// [object Object] {
//   color: "red",
//   size: 5,
//   soft: true
// }
// "red"
// "red"

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