function bubbleSort(array) {
  // Only change code below this line
//  console.log("inside bubble", array.length);
 for (let i = 0; i < array.length-1; i++) {
    console.log(i);
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        console.log("made it here");
        let adjVal = array[i];
        array[i] = array[j];
        array[j] = adjVal;

        /* [array[i], array[j]] = [array[j], array[i]] */
      }
    }
  }



  return array;
  // Only change code above this line
}


console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
