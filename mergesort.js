function split(wholeArray) {
  let mitad1 = 0;
  let mitad2 = 0;
  if (wholeArray.length % 2 === 0) {
    mitad1 = wholeArray.length / 2;
    mitad2 = wholeArray.length / 2;
  } else {
    mitad1 = wholeArray.length / 2 + 0.5;
    mitad2 = wholeArray.length / 2 + 0.5;
  }
  let firstHalf = wholeArray.slice(0, mitad1);
  let secondHalf = wholeArray.slice(mitad2, wholeArray.length);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  const newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  for (; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (; j < arr2.length; j++) {
    newArr.push(arr2[j]);
  }
  return newArr;
}

function arrayContieneArraysDeUnSoloElemento(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      if (arr[i].length === 1 && arr[i + 1].length === 1) {
        return true;
      } else {
        return false;
      }
      // Si encuentra al menos un arreglo interno, devuelve true
    } else {
      return false;
    }
  } // Si no encuentra ningún arreglo interno, devuelve false
}

function mergeSort(array) {
  let arrayDeArrays = [];
  let arrayConDosArrays = [];
  let contieneArraysDeUnSoloElemento = false;

  if (contieneArraysDeUnSoloElemento) {
    return arrayDeArrays;
  } else {
    arrayConDosArrays = split(array);
    arrayDeArrays.push(arrayConDosArrays.pop());
    arrayDeArrays.push(arrayConDosArrays.pop());
    contieneArraysDeUnSoloElemento =
      arrayContieneArraysDeUnSoloElemento(arrayDeArrays);
  }
}

/* function merge(arreglo1, arreglo2) {
  let recorrido = 0;
  let nuevoArreglo = [];
  if (arreglo1.length > arreglo2.length) {
    recorrido = arreglo1.length;
  } else {
    recorrido = arreglo2.length;
  }
  for (let i = 0; i < recorrido; i++) {
    if (arreglo1[i] < arreglo2[i]) {
      nuevoArreglo.push(arreglo1[i]);
    } else if (arreglo2[i] < arreglo1[i]) {
      nuevoArreglo.push(arreglo2[i]);
    } else if (arreglo1.length === 0) {
      nuevoArreglo.push(arreglo2[i]);
    } else if (arreglo2.length === 0) {
      nuevoArreglo.push(arreglo1[i]);
    }
  } 
  return nuevoArreglo;
} */

//>
//<
