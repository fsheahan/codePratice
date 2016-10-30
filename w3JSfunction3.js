/*Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
*/

function combinations(str, outstr, index){
  for(var x = index; x < str.length; x++){
    outstr = outstr + str[x];
    console.log(outstr);
    combinations(str, outstr, x + 1);
    outstr = outstr.substring(0, outstr.length - 1);
  }
}

combinations("dog","",0);
