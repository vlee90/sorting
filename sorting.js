// Exchanges two values within the array.
function exchange(array, low, high) {
  var temp = array[low];
  array[low] = array[high];
  array[high] = temp;
}

function order(array, low, high) {
  var pivot = array[Math.floor((low + high) / 2)];
  while (low <= high) {
    while(array[low] < pivot) {
      low++;
    }
    while (array[high] > pivot) {
      high--;
    }
    if (low <= high) {
      exchange(array, low, high);
      low++;
      high--;
    }
  }
  return low;
}
function visualUpdate(array) {
  $("#arrayID").empty();
  $.each(array, function(i, num) {
    $("#arrayID")
    .append("<div class='red' style='width:" + num + "px;'>" + num + "</div>")
  });
}
function quickSort(array, low, high) {
  var index;
  if (array.length > 1) {
    index = order(array, low, high);
  setTimeout(visualUpdate(array),10);
    if (low < index - 1) {
      quickSort(array, low, index - 1);
    }
    if (index < high) {
      quickSort(array, index, high);
    }
      console.log(arrayStart);
  }
  return array;
}

var arrayStart = new Array(30);

// Randomly create values in an array.
for(i = 0; i < arrayStart.length; i++) {
  arrayStart [i] = Math.floor(Math.random() * 150) + 1;
}
console.log(arrayStart);
visualUpdate(arrayStart);

var output = quickSort(arrayStart, 0, arrayStart.length - 1);
