// Liron Heker + Alexander Dovbush
// Print all prime numbers below 237
const num = 237;
var flag = true;
for (var i = 2; i < num; i++) {
  flag = true;
  for (var j = 2; j * j <= i; j++) {
    if (i % j === 0) {
      flag = false;
      break;
    }
  }
  if (flag === true) {
    console.log(i);
  }
}
