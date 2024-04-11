//  1.- Se requiere conocer la cantidad de letras de una palabra dentro de la frase.
//    La palabra se debe seleccionar por su posicion.
//   ( quiero saber la longitud de la segunda palabra)
//   si preguntamos por una posicion que no existe en la frase, devolvemos un mensaje que indique el error

//  3.- Se requiere eliminar todas las palabras cortas de la frase, considerando que una palabra corta es aquella que tiene 3 caracteres o menos, y debemos obtener la nueva frase sin palabras cortas
//  4.- Se requiere obtener la frase, pero escrita en orden inve

// const phrase = "La mejor forma de predecir el futuro es creándolo"


const countLetters = (frase, index) => {
    
    const arrayPhrase = frase.split(" ")

    
    if( index > arrayPhrase.length){
        return "Error"
    } 
  

    let palabraSeleccionada = arrayPhrase[index]
    
    return palabraSeleccionada.length
}

const frase = "La mejor forma de predecir el futuro es creándolo"
const posicion = 0
console.log(countLetters(frase , posicion))

//  2.- De la frase, necesitamos eliminar una palabra con base en su posicion, y recibir una nueva frase sin la palabra borrada


const removeWord = (index, frase2, remplace) => {
    const convertArray = frase2.split(" ")
    convertArray[index] = remplace

    const newFrase = convertArray.join(" ")

    return newFrase
}
const frase2 = "La mejor forma de predecir el futuro es creándolo"
const posicion2 = 1
const remplace = "hola"
console.log(removeWord(posicion2, frase2, remplace))