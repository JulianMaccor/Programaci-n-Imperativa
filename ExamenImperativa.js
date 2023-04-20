//Ejercicio 1:

/* Crear una función que reciba como parámetro él array de países, un continente, y un número de población.
La misma debe retornar un nuevo array solo con los países que sean del continente pasado por parámetro, y además, que su población sea menor o igual a la del parámetro.
Si no encuentra coincidencias deberá retornar un array vacío */

let paises = [
    {
      nombre: "Argentina",
      continente: "Sudamérica",
      poblacion: 40000
    },
  {
      nombre: "Colombia",
      continente: "Sudamérica",
      poblacion: 50372
    },
 
    {
      nombre: "Brasil",
      continente: "Sudamérica",
      poblacion: 300000
    },
    {
      nombre: "Etiopía",
      continente: "África",
      poblacion: 15000
    },
    {
      nombre: "Chile",
      continente: "Sudamérica",
      poblacion: 10000
    }
];

console.log('El array de paises es el siguiente: ');
console.table(paises)
console.log('**************************************************************');

const paisPorContinente = (paises, continente, numPoblacion) => {
    let arrayPaisFiltrado = [];
    for (let i = 0; i < paises.length; i++) {
        
        if (paises[i].continente === continente && paises[i].poblacion <= numPoblacion) {
            arrayPaisFiltrado.push(paises[i])
        } 
    }
    if (arrayPaisFiltrado.length === 0) {
        return [];
    }else{
        return arrayPaisFiltrado;
    }
}

console.log('El resuultado provisto por el filtro es: ');
console.table(paisPorContinente(paises, 'África', 20000))
console.log('**************************************************************');



//Ejercicio 2

/* Crear una función llamada bubbleSort que reciba como parámetros el array deberá realizar un ordenamiento ascendente, es decir, de menor a mayor	
Para analizar el correcto funcionamiento imprimir por consola el array antes y después de ejecutar la función.  */

let arrayDeNumeros = [1,2,3, 8, 9, 104, 5, 6, 7, 15];

console.log('Array de numeros por defecto: ');
console.table(arrayDeNumeros);
console.log('**************************************************************');

const bubbleSort = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]){
                let auxiliar = array[j]
                array[j] = array[j + 1]
                array[j + 1] = auxiliar
            }  
        }
    }
    return array;
}
console.log('Array de numeros ordenado de forma ASCENDENTE: ');
console.table(bubbleSort(arrayDeNumeros));
console.log('**************************************************************'); 

//Ejercicio 3

/* a- Crear una función que reciba la matriz por parámetro, sume todos los valores de primer diagonal  y retorne la suma.*/
/* b- Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz. */

let matriz = [
    [5, 2, 2], // 0
    [2, 5, 2], // 1
    [4, 4, 5]  // 2
];
//a

const sumaDiagonal = matriz => {
    let sumatoria = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i === j) {
                sumatoria += matriz[i][j];
            } 
        }
    }
    return sumatoria
}

console.log('La sumatoria de los elementos de la diagonal de la matriz da como resultado: ');
console.log(sumaDiagonal(matriz));
console.log('**************************************************************');

//b
const pares = matriz => {
    let valoresPares = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            let numAverificar = matriz[i][j];
            if (numAverificar %2 === 0 ) {
                valoresPares.push(numAverificar)
            }
        }
    }
    return valoresPares
}

console.log('El array con los valores pares de la matriz es: ')
console.table(pares(matriz));

