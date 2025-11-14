export function getProductCategoriesFromData(initialCategory, data) {
  let arr = [initialCategory];
  for (let i = 0; i < data.length; i++) {
    let duplicateFlag = false;
    for (let j = 0; j < arr.length; j++) {
      if (data[i].category === arr[j].name) {
        duplicateFlag = true;
        break;
      }
    }

    if (!duplicateFlag) {
      arr.push({ name: data[i].category, current: false });
    }
  }
  return arr;
}
