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

export function getTotalNCartItems(cart) {
  return cart.reduce(
    (totalVal, currentVal) => totalVal + currentVal.qtyInCart,
    0
  );
}

export function calculateSubtotal(cart) {
  const subtotal = cart.reduce(
    (total, current) => total + current.qtyInCart * current.price,
    0
  );
  return (Math.round(subtotal * 100) / 100).toFixed(2);
}
