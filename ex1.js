// Liron Heker + Alexander Dovbush
// Prints how many of the numbers 2, 3, 5 divide num evenly
const num = 123;

const count = Number(!(num % 2)) + Number(!(num % 3)) + Number(!(num % 5));

console.log(count);
