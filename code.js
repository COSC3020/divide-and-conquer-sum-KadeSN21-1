function divideAndConquerSum(a) {
  const length = a.length;
  if (length == 0){ // C
    return 0;
  }
  if (length == 1) { // C
      return a[0];
  }

  const oneThird = Math.floor(length / 3); // C
  const twoThirds = Math.floor((2 * length) / 3); // C

  const left = divideAndConquerSum(a.slice(0, oneThird)); // 
  const middle = divideAndConquerSum(a.slice(oneThird, twoThirds));//
  const right = divideAndConquerSum(a.slice(twoThirds)); //

  return left + middle + right;
}
// T(N) = 
