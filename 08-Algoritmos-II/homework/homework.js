'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;

  let pivot = array[Math.floor(Math.random() * array.length)]

  let equals = []; 
  let left = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== pivot){
      if (array[i] < pivot) left.push(array[i])
      else right.push(array[i]);
    } 
    else equals.push(array[i]);
  }
  return quickSort(left).concat(equals).concat(quickSort(right));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length<2) return array;

  let mitad = Math.floor(array.length / 2);
  let left = array.slice(0,mitad);
  let right = array.slice(mitad);

  array = [];

  left = mergeSort(left);
  right = mergeSort(right);

  while(left.length && right.length) {
    if (left[0] < right[0]) array.push(left.shift());
    else array.push(right.shift());
  }
  return array.concat(left,right);



  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
