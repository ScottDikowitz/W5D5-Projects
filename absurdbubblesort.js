var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback){
  reader.question("Is " + el1 + "greater than" + el2 + "?", function(answer){
    if (answer.toLowerCase() === "yes"){
      callback(true);
    }
    else if (answer.toLowerCase() === "no"){
      callback(false);
    }
    else{
      askIfGreaterThan(el1, el2, callback);
    }

  })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if (i === arr.length - 1){
    console.log(arr);
      outerBubbleSortLoop(madeAnySwaps);
      }
  else {
    askIfGreaterThan(arr[i], arr[i + 1], function(swap){
    console.log("loop");
    console.log("i = " + i);
      if (swap === true){
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
        i++;
        console.log("i = " + i);
        innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
        }
        else {
          i++;
          innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
        }
      })
     };
  }

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {

      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);

    } else {

      sortCompletionCallback(arr);
    }

  }
    innerBubbleSortLoop(arr, 0, true, outerBubbleSortLoop);
}

absurdBubbleSort( [3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
