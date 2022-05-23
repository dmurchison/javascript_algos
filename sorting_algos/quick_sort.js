
// -- Array#quickSort --

Array.prototype.quickSort = function() {
  if (this.length < 2) return this;

  const pivot = this[0];
  const left = this.slice(1).filter(el => el <= pivot);
  const right = this.slice(1).filter(el => el > pivot);

  const leftSort = left.quickSort();
  const rightSort = right.quickSort();

  return leftSort.concat([pivot]).concat(rightSort);
}



// Test Cases:
console.log(`[5,3,2,5,3,8,9,7,5,1,2,43,2,1].quickSort = ${[5,3,2,5,3,8,9,7,5,1,2,43,2,1].quickSort()}`);

