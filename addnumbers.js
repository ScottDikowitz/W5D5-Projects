"use strict";
var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  var numsLeft = numsLeft;
  var num;
  if (numsLeft > 0){
    reader.question("Enter number: ", function(number){
      num = parseInt(number);
      numsLeft -= 1;
      sum += num;
      console.log("partial sum: " + sum);
      addNumbers(sum, numsLeft, completionCallback);
    })
  }else{
    completionCallback(sum);
  }
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});
