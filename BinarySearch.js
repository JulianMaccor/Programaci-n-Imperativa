//Ejercicio 1:

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function binarySearch(array, x) {
    let start = 0;
    let end = array.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (array[mid] === x) {
        return mid;
      } else if (array[mid] < x) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
}

let pos1 = binarySearch(list, 1);
//et pos5 = binarySearch(list, 5);
let pos6 = binarySearch(list, 6);
let pos9 = binarySearch(list, 9);
let pos11 = binarySearch(list, 11);

console.log("Posición del número 1: " + pos1);
console.log("Posición del número 5: " + pos5);
console.log("Posición del número 6: " + pos6);
console.log("Posición del número 9: " + pos9);
console.log("Posición del número 11: " + pos11);


/* Buscar la posición de un número en un array—, pero partiendo de esta lista:
let list = [12,3,5,7,1,22,47,100];

Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. Luego, respondan las siguientes preguntas:
¿Cuál es la posición del número 12?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 22?
¿Cuál es la posición del número 100?
 */

let list2 = [12,3,5,7,1,22,47,100];

for (let i = 0; i < list2.length - 1; i++) {
    for (let j = 0; j < list2.length - 1 - i; j++) {
      if (list2[j] > list2[j + 1]) {
        let temp = list2[j];
        list2[j] = list2[j + 1];
        list2[j + 1] = temp;
      }
    }
}

let pos12 = binarySearch(list2, 12);
let pos5 = binarySearch(list2, 5);
let pos22 = binarySearch(list2, 22);
let pos100 = binarySearch(list2, 100);

console.log("Posición del número 12: " + pos12);
console.log("Posición del número 5: " + pos5);
console.log("Posición del número 22: " + pos22);
console.log("Posición del número 100: " + pos100);



