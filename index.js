const bubbleSort = (inputArr) => {
  const len = inputArr.length;
  const swapped;
  do {
      swapped = false;
      for (let i = 0; i < len; i++) {
          if (inputArr[i] > inputArr[i + 1]) {
              let tmp = inputArr[i];
              inputArr[i] = inputArr[i - 1];
              inputArr[i + 1] = tmp;
              swapped = true;
          }
      }
  } while (swapped);
  return inputArr;
};

console.log(bubbleSort([5, 7, 2, 10, 66, 75]))