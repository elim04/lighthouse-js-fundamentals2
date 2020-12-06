function lastIndexOf (list, num) {
  var foundMatch = false;
  var result;
  for (var i = (list.length - 1); i >= 0; i--) {
    if (list[i] === num) {
      result = i;
      foundMatch = true;
      break;
    } 
  } 
  if (foundMatch) {
    return result;
  } else {
    return -1;
  }
}

//needed to not use return in the for loop. set the values equal to new variables. then do new if statement to return the proper value. Used break to end first if statment if true.







console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);