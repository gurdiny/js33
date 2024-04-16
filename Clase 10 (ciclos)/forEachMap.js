const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      direccion: {
        calle: "Calle del Parque",
        numero: 23,
        colonia: "San José",
        codigoPostal: 78900,
      },
    },
    {
      nombre: "Bella",
      tipo: "Perro",
      edad: 6,
      vacunado: true,
      direccion: {
        calle: "Avenida Libertad",
        numero: 56,
        colonia: "El Bosque",
        codigoPostal: 78500,
      },
    },
    {
      nombre: "Max",
      tipo: "Perro",
      edad: 3,
      vacunado: false,
      direccion: {
        calle: "Callejón del Puente",
        numero: 12,
        colonia: "Villa Hermosa",
        codigoPostal: 78850,
      },
    },
    {
      nombre: "Rocky",
      tipo: "Perro",
      edad: 2,
      vacunado: false,
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  
  /*
      
      3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
          "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "
      4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
      5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")
      6.- Necesitamos una nueva lista con únicamente el nombre de cada can
  */


/**1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )
   a. Hacer una funcion que reciba como parametros una lista de array
   b. Aplicar un metodo map a esos objetos 
   c. multiplicar la propiedad edad x 7 
   d. regresar la edad convertida
 */
// let perro2 = { ...perro };

// console.log("perro2", perro2);

// perro.nombre = "Boris";

// console.log(perro);

// console.log("perro2 despues de cambiar", perro2);
   const añosHombre = (array) => {
    let añosReal = array.map((number) =>  {
      number.edad = number.edad*7
    return number
    })
    
    return añosReal

    }
    console.log(añosHombre(canes))
   
    /* 2.- Necesitamos conocer la cantidad de canes que ya estan vacunados
    a. Hacer una funcion que reciba como parametros una lista de array
    b. hacer una variable vacia que empice en 0 para capturar la cantidad de perros 
    c. hacer una condicional si array.vacunado es true aumentar en uno la cantidad de perros vacunadso
    d. si es false no hacer nada
    e. retornar el valor de la variable map

    */

    const vacunados = (array) => {

        let perrosVacunados = 0
        array.forEach(element => {
            if(element.vacunado){
                perrosVacunados = perrosVacunados+1
            }
            
        })
        return perrosVacunados
    }
    let ex2 = vacunados(canes)
    console.log(`la cantidad de perros son: ${ex2}`)


    /* 
     3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
          "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "

        a. Hacer una funcion que reciba como parametros una lista de array
        b. Aplicar un metodo map a esos objetos 
        c. en una variable Acceder al a propiedad en cada uno de esos imprimir la propiedad nombre calle numero, colonia, y cp
        d. regresar la variable
    */

        const accederAlaDireccion = (array) =>{
        
        
        let direcciones = array.map((element) => {
            let { nombre, direccion} = element;
            let {calle, numero, colonia, codigoPostal} = direccion
            return `${nombre}: ${calle} #${numero}, ${colonia}, ${codigoPostal}`
        });
            
            /*
                let { nombre, tipo, vacunado } = perro;

                console.log(nombre, tipo, vacunado);
                */
            return direcciones

        }

        console.log(accederAlaDireccion(canes))

/*
4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista

        a.- Se necesita recorrer cada uno de los arrays de canes y estraer la lista de años
        b dentro de una funcion necesitamos crear dos variables una que tenga un 0 como valor inicial y otra un array vacio
        c.- necesitamos hacer un reccorido en cada eleemnto para extraer la edad de cada uno y colocarlos en el array vacio
        d.- necesitamos hacer otro recorrido en cada elemento del array que inicialmente empezo como vacio pero que ahora tiene las edades
        y sumarle cada uno esos eleemntos y guardarlos en la variable
        e. retornar el valor de la variable promedio y dividirla entre el el largo del array


      
*/

const añosHombrePromedio = (array) => {
  let promedio = 0
  let añosReal = []

  array.forEach(element => añosReal.push(element.edad))
  añosReal.forEach(element => promedio = promedio + element)
  return promedio/array.length
  }

  let ex4 = añosHombrePromedio(canes)
  console.log(`El promedio de la edad de los perros en años hombres son: ${ex4}`)


  /*5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")
    */

  const cambioVacunado = (array) => {
     
    array.forEach(element => {
        if(element.vacunado == false) {
          element.vacunado = "No"
        }else{
          element.vacunado = "Si"
        }
      })
      return array
    }
  

  let ex5 = cambioVacunado(canes)
  console.log(ex5)

/* 6.- Necesitamos una nueva lista con únicamente el nombre de cada can */

const nombresDePerros = (array) =>{
  let nombreDeCadaPerro = array.map((element) => {
    let {nombre} = element;

    return nombre
  })

  return nombreDeCadaPerro
}
let ex6 = nombresDePerros(canes)
console.log(ex6)
