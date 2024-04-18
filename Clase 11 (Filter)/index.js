const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      pais: "México",
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
      pais: "México",
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
      pais: "Colombia",
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
      pais: "Ecuador",
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  
  /*
      1.- Necesito conocer la edad promedio de todos los perros
      a.- hacer una funcion que recorra el array
      b.- guardar en una variable el dato de retorno de la operacion
      c.- aplicar en un reduce cada elemento del array, con un acumulado de tipo numero en 0
      d.- cambiar el valor del acumulado mas la edad de cada perro
      e.- retornar la suma de todos los perros entre el largo del array
      */

const edadPromedio = (array) =>{
        let promedio = array.reduce((acumm, current) => acumm = acumm + current.edad, 0)
        return promedio/array.length
}
let ex1 = edadPromedio(canes)
console.log(`*Ejercicio 1* El promedio de la edad es: ${ex1} `)

 /*
      
      2.- Necesito obtener una lista de perros basados en el país al que pertenecen
      a.- Hacer una funcion que recorra un array
      b.- aplicar un reduce con un array de con objetos
      c.- Inserar el array correspondiente a su pais
     
      */

const listOfContry = (arrayCanes) =>{

    let lista = arrayCanes.reduce((acumm, current) =>  {
       if(current.pais === "México"){ 
        return {
        ...acumm, mexico: [...acumm.mexico, current]
        }
        }else if(current.pais === "Colombia"){
            return {
                ...acumm, Colombia: [...acumm.Colombia, current]
            }
        }else if (current.pais === "Ecuador"){
            return {
                ...acumm, Ecuador: [...acumm.Ecuador, current]
            }
        }

        return acumm
    },{
        mexico: [], 
        Colombia: [], 
        Ecuador: []
    })

    return lista
}


console.log(listOfContry(canes))

/*  3.- Necesito una lista de los códigos postales de los perros
    a.- Hacer una funcion que recorra un array
    b.- aplicar un reduce con un array de con objetos
    c.- Inserar el array correspondiente a su pais
 */

const listOfCp = (arrayCanes) =>{

        let lista = arrayCanes.reduce((acumm, current) =>
        acumm =  [...acumm, current.direccion.codigoPostal]    
        , [] )
    
        return lista
    }
    
    
    console.log(listOfCp(canes))

/* 
  4.- Necesito una lista que contenga la lista de países a los que pertenecen los perros, pero sin repetidos
  a.- crear una funcion que lea los arrays de cannes
  b.- Hacer un recorrido de cada elemento y extraer los paises
  c.- retornar los paises en un array
   */

  const paises = (array) =>{
    let countryList = array.reduce((acumulador, element) => {
        if (!acumulador.includes(element.pais)){
        acumulador = [...acumulador, element.pais]
        }
        return acumulador
    }, [])

    return countryList

  }

  console.log(paises(canes))


// console.log(paises(canes));