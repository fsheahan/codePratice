/*Write a JavaScript function that reverses a number.
Sample Data and output:
Example x = 32243;
Expected Output : 34223
*/
function reverseNumber(n){
  n = n + "";
  return n.split("").reverse().join("");
}

console.log(reverseNumber(32243));
