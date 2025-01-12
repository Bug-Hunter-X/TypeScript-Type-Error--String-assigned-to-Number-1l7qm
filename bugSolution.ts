function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

const num1 = 1;
const num2 = "2";

// Type guard
if(isNumber(num1) && isNumber(parseInt(num2))) {
  const result = add(num1, parseInt(num2));
  console.log(result); // Output: 3
}
// Explicit conversion
const result2 = add(num1, parseInt(num2));
console.log(result2); // Output: 3