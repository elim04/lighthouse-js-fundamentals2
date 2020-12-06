
function range (start, end, step) {
  var someArray = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0 || step === 0) {
    someArray = [];
  } else {
    var i = start;
    while (i <= end) {
      someArray.push(i);
      i += step;
    }
  }
  return someArray;
} 

//Using a for loop to solve. Remember to make sure increment step is actually adding + step each time
function range(start, end, step) {
  var someArray = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    someArray = [];
  } else {
    for (var i = start; i <= end; i += step) {
      someArray.push(i);
    }
  } 
  return someArray;
}