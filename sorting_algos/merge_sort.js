
// -- Array#mergeSort --

Array.prototype.mergeSort = function() {
  if (this.length < 2) return this;

  const midPoint = Math.floor(this.length / 2);
  const left = this.slice(0, midPoint);
  const right = this.slice(midPoint);

  const leftSort = left.mergeSort();
  const rightSort = right.mergeSort();
  
  return merge(leftSort, rightSort);
}

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    };
  };

  return merged.concat(left, right);
};



// Test Cases:
console.log(`[5,3,2,5,3,8,9,7,5,1,2,43,2,1].mergeSort = ${[5,3,2,5,3,8,9,7,5,1,2,43,2,1].mergeSort()}`);
// => 1,1,2,2,2,3,3,5,5,5,7,8,9,43



