// Liron Heker + Alexander Dovbush
// print the amount of 0 in the array
var arr = [1, 22, 0, 40, 0, 0, 5, 0, 6, 0];
var count = 0;
for (var i = 0; i < arr.length; i++) {
  count += arr[i] === 0 ? 1 : 0;
}
console.log(count);
