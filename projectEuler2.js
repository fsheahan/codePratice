/*
var sum = 0;

function isDivisible(num, divisor){
  return num % divisor == 0;
}

function fib(n){
  if (n <= 1) return(1);
  return fib(n-1) + fib(n-2);
}

for (var i = 0; i < 10000; i++){
  var f = fib(i);
  if (f < 4000000) console.log(sum);
  if (isDivisible(f, 2)){
    sum += f;
  }
}
*/

function sumOfEven(limit) {
    var temp, sum = 0, a = 0, b = 1;
    while (b < limit) {
        temp = a;
        a = b;
        b += temp;
        if ((b & 1) === 0) {
            sum += b;
        }
    }
    return sum;
}

console.log(sumOfEven(4e6));
