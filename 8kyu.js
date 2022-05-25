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
