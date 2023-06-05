function uniceItem(arr) {
  let newArr = [];
  arr.map((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr.sort((a, b) => a - b);
}

console.log(uniceItem([1, , 3, 3, 4, 2, 3, 4, 4]));
