// Repaso de la semana 1 
function sumarDosNumeros (num1, num2) {

    let nombre = num1 + num2 

    return nombre

}

let prueba1 = sumarDosNumeros(5, 10)

console.log(prueba1)

// const addTwoNumber = (num1, num2) =>  {
//     let result = num1 + num2
//     return result
// }

const addTwoNumber = (num1, num2) => num1 + num2

let pruebaArrow = addTwoNumber(3, 20)
console.log(pruebaArrow)