function countSheeps(arrayOfSheep) {
    let present = 0;
    arrayOfSheep.forEach(x => x ? present++ : present);
    return present
  }