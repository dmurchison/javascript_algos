
// -- Array#bubbleSort --

Array.prototype.bubbleSort = function() {
  const sortedArr = this.slice();
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < sortedArr.length; i++) {
    let j = (i + 1);
      if (sortedArr[i] > sortedArr[j]) {
        sorted = false;
        [sortedArr[i], sortedArr[j]] = [sortedArr[j], sortedArr[i]];
      };
    };
  }

  return sortedArr;
};



// Test Cases:
console.log(`[5,3,2,5,3,8,9,7,5,1,2,43,2,1].bubbleSort = ${[5,3,2,5,3,8,9,7,5,1,2,43,2,1].bubbleSort()}`);
// => 1,1,2,2,2,3,3,5,5,5,7,8,9,43



