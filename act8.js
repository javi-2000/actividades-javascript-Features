function sum([...allNumbers]) {
  return allNumbers.reduce((acc, n) => acc+n, 0);
}

const numbers = [1, 2, 3];
console.log(sum(numbers));