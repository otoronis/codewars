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
