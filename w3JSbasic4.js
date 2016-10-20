/*Find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
*/

function areatriangle(a,b,c){
  var p = (a+b+c)/2;
  console.log(Math.sqrt(p * ((p - a) * (p - b) * (p - c))));
}

areatriangle(5,6,7)
