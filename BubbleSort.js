/* Metodos de Ordenamiento */

/* 1 - Bubble sort */

//Swapping de variables: viejo

/*
let x = 15;
let y = 25;
console.log(x, y);
let auxiliar = x

x = y
y = auxiliar
console.log(x, y);

//Swapping de variables: actualmente 

x, y = y, x
*/

//1 - Bubble sort ASCENDENTE
const edades = [33, 27, 34, 30, 34, 25];



const bubbleSortAsc = arrayNum => {
    for (let i = 0; i < arrayNum.length; i++) {
        
        for (let j = 0; j < arrayNum.length - 1; j++) {
            if (arrayNum[j] > arrayNum[j + 1]){
            let auxiliar = arrayNum [j]
            arrayNum[j] = arrayNum[j + 1]
            arrayNum[j + 1] = auxiliar
            }  
        }
    }
}

bubbleSortAsc(edades)
console.log(edades)


const bubbleSortDesc = arrayNum => {
    for (let i = 0; i < arrayNum.length; i++) {
        
        for (let j = 0; j < arrayNum.length - 1; j++) {
            if (arrayNum[j] < arrayNum[j + 1]){
            let auxiliar = arrayNum [j]
            arrayNum[j] = arrayNum[j + 1]
            arrayNum[j + 1] = auxiliar
            }  
        }
    }
}
bubbleSortDesc(edades)
console.log(edades)


const letras = ['C', 'A', 'D', 'E', 'H', 'Z', 'J', 'L']

const bubbleSortLetras = arrayLetras => {
    for (let i = 0; i < arrayLetras.length; i++) {
        for (let j = 0; j < arrayLetras.length - 1; j++) {
            if(arrayLetras[j] > arrayLetras[j + 1]){
                let auxiliar = arrayLetras[j]
                arrayLetras[j] = arrayLetras[j + 1]
                arrayLetras[j + 1] = auxiliar;
            }
            
        }
        
    }
}


console.log('Array letras desordenado: ' + letras)
bubbleSortLetras(letras)
console.log('Array letras ordenado alfabeticamente: ' + letras)


const arrayCuentas = [
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: 3253.40,
        edadTitular: 33, tipoCuenta: "sueldo"
    },
    {
        titular:'Roslyn Torres',
        estaHabilitada: false,
        saldo:3253.40,
        edadTitular: 33,
        tipoCuenta: 'sueldo',
    },
    {
        titular: 'Cleo Lopez',
        estaHabilitada: true,
        saldo: 1360.19,
        edadTitular: 34,
        tipoCuenta: 'corriente',
    },
    {
        titular: 'Daniel Malone',
        estaHabilitada: false,
        saldo:3627.12,
        edadTitular: 30,
        tipoCuenta:'sueldo',
    },
    {
        titular: 'Ethel Leon',
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: 'sueldo',
    },
    {
        titular: 'Harding Mitchell',
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: 'corriente',
    },
]

const bubbleSortAscSaldo = arrayObj => {
    for (let i = 0; i < arrayObj.length; i++) {
        
        for (let j = 0; j < arrayObj.length - 1; j++) {
            if (arrayObj[j].saldo > arrayObj[j + 1].saldo){
            let auxiliar = arrayObj [j]
            arrayObj[j] = arrayObj[j + 1]
            arrayObj[j + 1] = auxiliar
            }  
        }
    }
}

bubbleSortAscSaldo(arrayCuentas)
console.log(arrayCuentas)


const bubbleSortAscEdad = arrayObj => {
    for (let i = 0; i < arrayObj.length; i++) {
        
        for (let j = 0; j < arrayObj.length - 1; j++) {
            if (arrayObj[j].edadTitular > arrayObj[j + 1].edadTitular){
            let auxiliar = arrayObj [j]
            arrayObj[j] = arrayObj[j + 1]
            arrayObj[j + 1] = auxiliar
            }  
        }
    }
}

bubbleSortAscEdad(arrayCuentas)
console.log(arrayCuentas)