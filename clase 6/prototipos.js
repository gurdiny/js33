// const someString = "lorme Ipsum"
// const someOtherString = "TEXTO EN MAYUSCULAS"

// const capString = someString.toUpperCase() // devueleve la ejecucion de la funcion 
// const capOtherString = someOtherString.toLocaleLowerCase //Devuelve el valor de la propieedad

// console.log(capOtherString)
// console.log(capString)

const phrase = "La mejor forma de predecir el futuro es creándolo"

// 1.- Saber cuántos caracteres tiene la frase
// Se necesita contar cada caracter de la frase uno por uno, para eso existe el metodo .length

const length = phrase.length;
console.log(length)

// 2.- Saber cuántas letras tiene la frase
// Se necesita contar todos los caracteres de la frase, sin incluir los espacioes ""
// Dentro de una funcion se le pase un split a la string para convertir cada caracter en un elemento de un array (incluyendo los espacios)
// con el metrodo filter se eliminan los que coincidan con los que estan vacios y se le hace un console log a ese resultado.

const letters = () => {
    const withOutLetters = phrase.split("")
    const withOutSpace = withOutLetters.filter(vacio => vacio != " ")
    console.log(withOutSpace.length)
}

letters()

// 3.- Saber cuántas palabras tiene la frase
// necesitamos convertir el strng en un array pero esta vez divididos por espacios " "
// Posteriormente contat el largo del array

const palabras = phrase.split(" ")
console.log(palabras.length)

// 4.- Obtener la misma frase pero en mayúsculas
// Se necesita convertir cada caracter de la frase en mayuscula, para eso existe el metodo .toUpperCase

const upperCase = phrase.toUpperCase()
console.log(upperCase)

// 5.- Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
//  Se necesita remplazar todo el contenido que coincida con "a" por un 4, en este caso, existe el metodo .replace,
//  pero solo remplaza el primer carcater que coincida, para remplazar todos se utiliza .replaceAll
const remplaceWord = phrase.replaceAll("a", "4")
    
console.log(remplaceWord)
    