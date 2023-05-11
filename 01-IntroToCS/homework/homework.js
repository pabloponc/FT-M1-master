"use strict";

 
function BinarioADecimal(num) {
  // 011001 = 25
  // <------- leyendo de der a izq
  //    1 * 2 ** 0  = 1
  //    0 * 2 ** 1  = 0
  //    0 * 2 ** 2  = 0
  //    1 * 2 ** 3  =  8
  //    1 * 2 ** 4  =  16
  //    0 * 2 ** 5  =   0
 
  var suma = 0;
  let digitos = num.toString ().split('').reverse().join('');
  for (let i=0; i<digitos.length; i++) {
    suma += ((digitos[i])* Math.pow(2, i));
  }
  return suma;
}

function DecimalABinario(num) {
    // 91 = 1011011
    // 91 / 2 = 45 residuo 1
    // 45 / 2 = 22 residuo 1
    // 22 / 2 = 11 residuo 0
    // 11/ 2 = 5 residuo 1
    // 5 / 2 = 2 residuo 1
    // 2 / 2 = 1 residuo 0
    // 1 / 2 = 0 residuo 1
 
 
    // var numBinario = [];
  // for (let i=0; num>0; i++){
  //   if (num % 2 != 0){
  //     numBinario.unshift(1);
  //   }
  //   else {
  //     numBinario.unshift(0);
  //   }
  //   num = Math.floor(num/2);
  // }
  // return numBinario.join('');

  
  let numBin = [];
  while( num >= 1) {
    let res = Math.trunc(num % 2);
    num = Math.floor( num / 2);
    numBin.unshift(res);
  }
  return numBin.join('');

}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
