const users = [
    {
      name: "Alice",
      lastname: "Johnson",
      age: 28,
      gender: "Female",
      country: "USA",
    },
    {
      name: "Bob",
      lastname: "Smith",
      age: 32,
      gender: "Male",
      country: "Canada",
    },
    {
      name: "Carlos",
      lastname: "Gomez",
      age: 24,
      gender: "Male",
      country: "Mexico",
    },
    {
      name: "Daniela",
      lastname: "Martinez",
      age: 30,
      gender: "Female",
      country: "Colombia",
    },
    {
      name: "Erik",
      lastname: "Svensson",
      age: 29,
      gender: "Male",
      country: "Sweden",
    },
    {
      name: "Fiona",
      lastname: "O'Donnell",
      age: 35,
      gender: "Female",
      country: "Ireland",
    },
    {
      name: "Gautam",
      lastname: "Patel",
      age: 27,
      gender: "Male",
      country: "India",
    },
    {
      name: "Hana",
      lastname: "Kim",
      age: 22,
      gender: "Female",
      country: "South Korea",
    },
    {
      name: "Ivan",
      lastname: "Petrov",
      age: 34,
      gender: "Male",
      country: "Russia",
    },
    {
      name: "Julia",
      lastname: "Santos",
      age: 25,
      gender: "Female",
      country: "Brazil",
    },
  ];
  
  /*
      1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
      
      1.1 Cerear una funcion que me permita cntenir mi funcionalidad
      1.2 Crear un array vacio que es donde irá lo que queremos regresar
      1.3 Iterear a lo largo de la lista de usuarios
      1.3.1 extraer unicamente el nombre
      1.3.2 ese nombre ingresarlo en la lista nueva
      1.4 Retornar la lista con los nombres

  */
  
    //   const extractNames = (list) => {

    //     const listOfName = []
    //     list.forEach(element => {
    //         listOfName.push(element.name)
            
    //     });
        
    //     return listOfName
    // }
    
    // console.log(extractNames(users))


const extractNames = (list) => {

    const listOfName = []
    for(let i = 0; i < list.length; i++) {
        listOfName.push(list[i].name)   
    }
    
    
    return listOfName
}

console.log(extractNames(users))

/* 2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"

      2.1 Cerear una funcion que me permita cntenir mi funcionalidad
      2.2 Crear un array vacio que es donde irá lo que queremos regresar
      2.3 agregar una condicion que si el arreglo donde itera coincide el array.grdade se aplique el ciclo for
      2.3 Iterear a lo largo de la lista de usuarios
      2.3.1 extraer unicamente el nombre
      2.3.2 ese nombre ingresarlo en la lista nueva
      2.4 Retornar la lista con los nombres
       */
const extractMale = (list) => {

    const listOfMale = []
    
    for(let i = 0; i < list.length; i++) {
        if(list[i].gender === "Male"){
            listOfMale.push(list[i].name)   
        }
    }
    return listOfMale
}
console.log(extractMale(users))

/*  3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"

      3.1 Cerear una funcion que me permita cntenir mi funcionalidad
      3.2 Crear un array vacio que es donde irá lo que queremos regresar
      3.3 agregar una condicion que si el arreglo donde itera coincide el array.grdade se aplique el ciclo for
      3.3 Iterear a lo largo de la lista de usuarios
      3.3.1 extraer unicamente el nombre
      3.3.2 ese nombre ingresarlo en la lista nueva
      3.4 Retornar la lista con los nombres */
const extractFemale = (list) => {

    const listOfFemale = []
    
    for(let i = 0; i < list.length; i++) {
        if(list[i].gender === "Female"){
            listOfFemale.push(list[i].name)   
        }
    }
    return listOfFemale
}
console.log(extractFemale(users))

/*  4.- Necesitamos saber la edad promedio de los usuarios 
    4.1 Cerear una funcion que me permita contener mi funcionalidad
      4.2 Crear un array vacio que es donde irá lo que queremos regresar
      4.3 Iterear a lo largo de la lista de usuarios
      4.3.1 extraer unicamente el numero de la edad
      4.3.2 agregarlos a un array vacio
      4.4 En un nuevo ciclo for, sumar los elementos que esten en el primer array
        4.5 retornar la suma      
*/
const extractAge = (list) => {

        const listOfAge = []
        let promedio = 0
        
        for(let i = 0; i < list.length; i++) {
           
            let age = list[i].age 
            listOfAge.push(age)  
            
        }

        for(let i = 0; i < listOfAge.length; i++){
            
            promedio = promedio + listOfAge[i]
           
        }
        return promedio/listOfAge.length
    }
    console.log(extractAge(users))

/*
    5.- Necesitamos saber la mayor edad

    5.1 Cerear una funcion que me permita contener mi funcionalidad
      5.2 Crear un array vacio que es donde irá lo que queremos regresar
      5.3 Iterear a lo largo de la lista de usuarios
      5.3.1 extraer unicamente el numero de la edad
      5.3.2 ingresar ese numero en el array vacio
      5.5 retornar un math.max del resultado de ese array
    
*/
const extractMayor = (list) => {

    const listOfMayor = []
    
    for(let i = 0; i < list.length; i++) {
       
        let age = list[i].age 
        listOfMayor.push(age)  
        
    }

    return (Math.max(...listOfMayor));
}
console.log(extractMayor(users))

/*
    
    6.- Necesitamos saber la menor edad

    6.1 Cerear una funcion que me permita contener mi funcionalidad
      6.2 Crear un array vacio que es donde irá lo que queremos regresar
      6.3 Iterear a lo largo de la lista de usuarios
      6.3.1 extraer unicamente el numero de la edad
      6.3.2 ingresar ese numero en el array vacio
      6.5 retornar un math.max del resultado de ese array
*/


const extractMin = (list) => {

  const listOfMin = []
  
  for(let i = 0; i < list.length; i++) {
     
      let age = list[i].age 
      listOfMin.push(age)  
      
  }

  return (Math.min(...listOfMin));
}
console.log(extractMin(users))