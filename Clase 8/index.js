/* 1.- Necesitamos poder entregar las iniciales del nombre de una persona, considerando únicamente primer nombre,
     apellido paterno y apellido materno
    input => Israel Salinas Martínez
    output => I. S. M.
    2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres, 
    debemos poder obtener algún nombre al azar. El nombre seleccionado debe ser eliminado de la lista original 
    para poder volver a usar la ruleta.
    
    Cuando ya no haya nombres, debe avisar que ya no hay nombres en la lista.
    */

    const ex1 = (nombreCompleto) => {
        const strToArray = nombreCompleto.split(" ")
        let newArray = []

        strToArray.forEach((element) => {
            let name = element.split("").splice(0, 1).join("")
            newArray.push(name)
        })
        // const allName = strToArray.forEach((element) => console.log(element.split("").join("").slice(1)))
       
        return newArray.join(" ")
    }

    console.log(`Las iniciales de tu nombre son: ${ex1("Gerardo Urias Romero")}`)


    /*2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres, 
    debemos poder obtener algún nombre al azar. El nombre seleccionado debe ser eliminado de la lista original 
    para poder volver a usar la ruleta.
    
    Cuando ya no haya nombres, debe avisar que ya no hay nombres en la lista.*/

    // Definir una función para obtener un nombre al azar y eliminarlo de la lista original
function ruletaDeNombres(listaDeNombres) {
    // Verificar si hay nombres en la lista
    if (listaDeNombres.length === 0) {
        console.log("Ya no hay nombres en la lista.");
        return null; // Devolver null si no hay nombres en la lista
    }
    
    // Generar un índice aleatorio dentro del rango de la lista de nombres
    const indiceAleatorio = Math.floor(Math.random() * listaDeNombres.length);
    
    // Obtener el nombre seleccionado usando el índice aleatorio
    const nombreSeleccionado = listaDeNombres.splice(indiceAleatorio, 1)[0];
    
    // Devolver el nombre seleccionado
    return nombreSeleccionado;
}

// Ejemplo de uso
const nombres = ["Juan", "María", "Carlos", "Laura"];

console.log(ruletaDeNombres(nombres)); // Selecciona y elimina un nombre al azar
console.log(nombres); // Muestra la lista actualizada de nombres
