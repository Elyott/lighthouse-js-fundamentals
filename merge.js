function merge(array1, array2){
  var array = [];
  var i;
  var t;
  for(i = 0; i < array1.length; i++){
    array.push(array1[i]);
  }
  for(i = 0; i < array2.length; i++){
    array.push(array2[i]);
  }
  for(k = 0; k < array.length; k++){
    for(i = 0; i < array.length; i++){
      if(array[i] > array[i + 1]){
        t = array[i];
        array[i] = array[i + 1];
        array[i + 1] = t;
      }
    }
  }
  return array;
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);