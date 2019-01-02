var arr = [4, 500, 203, 76, 13, 81, 199]

function bubbleSort(data) {

for (var i = 0; i < data.length - 1; i++) {
  for (var j = i + 1; j <data.length; j++){
    if (data[i] > data[j]) {
      var temp = data[j];
      data[j] = data[i];
      data[i] = temp;
    }
  }
}
}

bubbleSort(arr);
console.log(arr);
