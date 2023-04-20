/* 
a. Ordenar la colección de menor a mayor utilizando bubble sort.
b. Crear una función buscarPorEdad que recibe como parámetros la colección de personas y una edad, y como resultado deberá imprimir por consola el nombre correspondiente a la persona cuya edad fue
pasada como parámetro.
Para realizar la búsqueda en la colección de personas, utilizar el
algoritmo de búsqueda binaria.
Por ejemplo:
buscarNombre(personas,25) // Imprime John buscarNombre(personas,76) // Imprime Marina
buscarNombre(personas,16) // Imprime Dan buscarNombre(personas,15) // Imprime Ale */

/* Tip: Así como ordenaste una colección con Bubblesort, fijándote en una propiedad numérica, podrás aplicar el algoritmo de búsqueda binaria de la misma manera. Solo tendrás que identificar cuál es la propiedad numérica que te interesa para la búsqueda. */

let personas = [ {
    id: 1, nombre: "Ale", edad: 15
    },
    {
    id: 2,
    nombre: "Javi",
    edad: 83,
    },
    {
    id: 3,
    nombre: "Luis",
    edad: 26, 
    },
    {
    id: 4,
    nombre: "Dan",
    edad: 16, 
    },
    {
    id: 5,
    nombre: "Tito",
    edad: 22,
    },
    {
    id: 6,
    nombre: "Marina",
    edad: 76, 
    },
    {
    id: 7,
    nombre: "Susy",
    edad: 35, 
    },
    {
    id: 8,
    nombre: "John",
    edad: 25,
    },
]


const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].edad > array[j + 1].edad){
            let auxiliar = array[j];
            array[j] = array[j + 1]
            array[j + 1] = auxiliar
            }  
        }
    }
    return array
}


const buscarPorEdad = (personas, edad) =>{
    let start = 0;
    let end = personas.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (personas[mid].edad === edad) {
            console.log(personas[mid].nombre);
            return;
        } else if (personas[mid].edad < edad){
            start = mid + 1;
        } else{
            end = mid - 1;
        }
    }

    console.log('No se encontró ninguna persona con esa edad.');
}

console.table(bubbleSort(personas));

buscarPorEdad(personas, 25); // Imprime John
buscarPorEdad(personas, 76); // Imprime Marina
buscarPorEdad(personas, 16); // Imprime Dan
buscarPorEdad(personas, 15); // Imprime Ale


