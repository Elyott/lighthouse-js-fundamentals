function range(start, end, step){
  var i = start;
  var rangeArray = [];
  if((start !== undefined || end !== undefined || step !== undefined) && start < end && step > 0){
    while(i <= end){
      rangeArray.push(i);
      i += step;
    }
    return rangeArray;
  } else {
    return rangeArray;
  }
}
console.log(range(0, 8, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));