function snapCrackle(maxValue) {

    let valor = 0

    for (let i = 1; i <= maxValue; i++) {
        if (i % 2 !== 0 && i % 5 === 0) {
            valor += ", SnapCrackle, "
        }
        else if (i % 5 === 0) {
            valor += ", Crackle, "
        }
        else if (i % 2 !== 0) {
            valor += ", Snap, "
        }
        else {
            valor += i
        }
    }
    return valor
}

console.log(snapCrackle(30))


const isPrime = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  };