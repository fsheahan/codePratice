function getPrime(number) {
  var factor = 2;
  while(number != factor) {
      if (number % factor === 0) {
        number = number / factor;
        factor = 2;
      } else {factor += 1}
  }

//console.log(factor);

    function writePrime(factor) {
      return factor;
    }
    console.log(writePrime(factor))
}

getPrime(600851475143);
