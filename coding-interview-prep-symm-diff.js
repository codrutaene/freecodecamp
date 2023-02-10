function compareNumbers(a, b) {
  return a - b;
}

function symDiffComp(arr1, arr2) {
  //console.log("symDiffComp", arr1, arr2);
  let res = [];
  let i = 0,
    j = 0;
  let n = arr1.length;
  let m = arr2.length;
  //console.log(n,m)

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      if (res.indexOf(arr1[i]) === -1) {
        res.push(arr1[i]);
      }

      i++;
    } else if (arr2[j] < arr1[i]) {
      if (res.indexOf(arr2[j]) === -1) {
        res.push(arr2[j]);
      }

      j++
    } else {
      i++;
      j++
    }

  }
  while (i < n) {
    res.push(arr1[i]);
    i++;
  }
  while (j < m) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

function sym(args) {
  let symdiff = [...new Set(arguments[0].sort(compareNumbers))];
  for (let i = 1; i < arguments.length; i++) {
    let arr1 = [...new Set(arguments[i].sort(compareNumbers))];
    /* let arr2 = arguments[i+1].sort(compareNumbers) */
    ;
    symdiff = symDiffComp(symdiff, arr1);
    //console.log(symdiff);

  }

  return symdiff;
}

//console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]))
