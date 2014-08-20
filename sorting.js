var arrayStart = new Array(11);
var lowArray = new Array();
var highArray = new Array();
var arrayHolder = new Array();
// Randomly create values in an array.
for(i = 0; i < arrayStart.length; i++) {
  arrayStart [i] = Math.floor(Math.random() * 20) + 1;
}

function pickPivot(array,left, right) {
  var pivotIndex = (left + right) / 2;
  return pivotIndex;
}

function orderArray(array, left, right) {
  pivotIndex = pickPivot(array, left, right);
  var pivotValue = array[pivotIndex];
  var temp = array[right];
  array[right] = array[pivotIndex];
  array[pivotIndex] = temp;
  var storeIndex = left;
  for(left; left < right - 1; left++) {
    if (array[i] < pivotValue) {
      temp = array[i];
      array[i] = array[left];
      array[left] = array[i];
    }
  }
  temp = array[right];
  array[right] = array[storeIndex];
  array[storeIndex] = temp;
  return storeIndex;
}

function quickSort(array, l, h) {
  var p = quickSort(array, l, h);
  console.log(l + " " + p + " " + h);
  if(l < h) {

    quickSort(array, l, p - 1);
    quickSort(array, p + 1, h);
  }
  return 0;
}
