var sum = 0;

function isDivisible(num, divisor){
  return num % divisor == 0;
}
for(var i = 0; i < 1000; i++){
  if(isDivisible(i, 3) || isDivisible(i, 5)){
    sum += i;
  }
}
console.log(sum);
