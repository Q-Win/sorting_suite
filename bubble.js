function bubbleSort(array) {

  for (i = 0; i < array.length; i++) {
    for(var n = 1; n < array.length ; n++){
      if (array[n-1] > array[n]){
        var placeHolder = array[n-1];
        array[n-1] = array[n];
        array[n] = placeHolder;
      }
    }
  }
  return array
}
module.exports = bubbleSort
