
// -- Array#binarySearch --

const defaultCallback = function(num1, num2) {
  if (num1 < num2) {
    return -1;
  } else if (num1 === num2) {
    return 0;
  } else {
    return 1;
  }
};

Array.prototype.binarySearch = function(target, callback) {
  if (this.length === 0) return -1;

  if (typeof callback !== 'function') {
    callback = defaultCallback;
  }

  const mid = Math.floor(this.length / 2);

  if (callback(target, this[mid]) === -1) {
    const left = this.slice(0, mid);
    return left.binarySearch(target, callback);
  } else if (callback(target, this[mid]) === 0) {
    return mid;
  } else {
    const right = this.slice(mid + 1);
    let res = right.binarySearch(target, callback);
    return res === -1 ? -1 : res + (mid + 1);
  }
};



// Test Cases:
console.log([5,6,7,8,9,10].binarySearch(8, defaultCallback)); // => 3
console.log([5,6,7,8,9,10].binarySearch(100)); // => -1

