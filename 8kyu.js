// My answers to 8kyu problems

// 1. Odd or Even

// 2. Opposite Numbers

// 3. L1 Set Alarm

// ...

// 50. Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= fuelLeft * mpg

// 51. Simple multiplication
const simpleMultiplication = number => (number % 2 === 0) ? number * 8 : number * 9

// 52. How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  let sum = classPoints.reduce((sum, x) => sum + x, 0);
  const average = Math.round(sum / classPoints.length);
  return yourPoints > average
}

// 53. Beginner - reduce but grow
const grow = x => x.reduce((product, x) => product * x, 1)

// 54. Sentence smash
const smash = words => words.join(' ')

// 55. Array plus array
const arrayPlusArray = (arr1, arr2) => arr1.reduce((sum, x) => sum + x, 0) + arr2.reduce((sum, x) => sum + x, 0)

// 56. Count the monkeys
const monkeyCount = n => Array(n).fill(null).map((u, i) => i + 1)

// 57. Function 3 - multiplying two numbers
const multiply = (x, y) => x * y

// 58. Transportation on vaction
function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50
  } else if (d >= 3) {
    return d * 40 - 20
  } else {
    return d * 40
  }
}

// 59. Convert a string to an array
const stringToArray = string => string.split(' ');

// 60. Total amount of points
function points(games) {
  let total = 0;
  games.forEach(x => total += (Number(x[0]) > Number(x[2]) ? 3 : (Number(x[0]) === Number(x[2]) ? 1 : 0)));
  return total
}

// 61. Volume of a cubiod
const getVolumeOfCuboid = (length, width, height) => length * width * height;

// 62. If you can't sleep, just count sheep
var countSheep = function (num){
  let result = '';
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result
}

// 63. Grasshopper - personalized message
const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;

// 64. Count by X
function countBy(x, n) {
  var z = []
  for (var i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z
}

// 65. Area or perimeter
const areaOrPerimeter = (l , w) => l === w ? l * w : 2 * (l + w);

// 66. Rock Paper Scissors
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  const rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

// 67. Can we divide it?
const isDivideBy = (number, a, b) => (Math.abs(number) % Math.abs(a) === 0) && (Math.abs(number) % Math.abs(b) === 0);

// 68. Third angle of a triangle
const otherAngle = (a, b) => 180 - a - b;

// 69. Quarter of the year
const quarterOf = (month) => Math.ceil(month / 3);

// 70. Remove exclamation marks
const removeExclamationMarks = s => s.replace(/!/g, '');

// 71. Sum without highest and lowest number
function sumArray(array) {
  if (!array || array.length <= 2) {
    return 0
  }
  let minimum = Math.min(...array);
  let maximum = Math.max(...array);
  array.splice(array.indexOf(minimum), 1, 0);
  array.splice(array.indexOf(maximum), 1, 0);
  let sum = array.reduce((acc, curr) => acc + curr, 0);
  return sum
}
