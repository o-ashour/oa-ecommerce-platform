export function sortArray(arr) {
  const sortedArr = [...arr];
  let temp;
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - 1; j++) {
      if (sortedArr[j].id > sortedArr[j + 1].id) {
        temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }
  return sortedArr;
}
