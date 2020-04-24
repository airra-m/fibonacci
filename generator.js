function fibonacciGenerator (n) {

  if (n === 1) {
    return [0];
  } 

  else if (n === 2) {  
    return [0, 1];
  }

  else {
    
    var fibonacciSeq = [0, 1];
    var seqLength = fibonacciSeq.length;
    
    while (seqLength < n) {

      var seqLength = fibonacciSeq.length;
      var pos1 = seqLength - 2;
      var pos2 = seqLength - 1;

      var firstNum = fibonacciSeq[pos1];
      var secondNum = fibonacciSeq[pos2];

      var nextNum = firstNum + secondNum; //1
    
      fibonacciSeq.push(nextNum); //[0, 1, 1]}
      seqLength = fibonacciSeq.length;

    }

    return fibonacciSeq;

  }

}

fibonacciGenerator(13);
