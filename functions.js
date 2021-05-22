/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */



function greet(name) {
  console.log("hello " + name);
}
greet("hakem");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if (n % 2 === 0)
  return consloe.log("false");
  else return console.log("true");


}
isOdd(11);
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
console.log (n / 2);

}
oddsSmallerThan(20);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
 if ( squareOrDouble % 2 === 0)
console.log( n * 2);
else (n * n);

}
squareOrDouble(10);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
