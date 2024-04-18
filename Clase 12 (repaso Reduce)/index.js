let data = [
    ["Israel", "Salinas", 34],
    ["Charles", "Silva", 27],
    ["Naomi", "Lopez", 27],
    ["David", "Moranchel", 28],
  ];
  
  /*
      1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data
      2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
      3.- Necesitamos reestructurar la data para que quede de la siguiente forma:
  
      let restructuredData = [
          {
              name:
              lastname:
              age
          }
      ]
  */

/*
    1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data
*/

const listOfNombers = (array) => array.map((element) => `${element[0]} ${element[1]}`)

console.log(listOfNombers(data))

/* 
2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
*/
const mayorAndMinor = (array) => {
    let list = array.reduce((accum, current) => accum = [...accum, current[2]] 
    ,[])

    let mayor = Math.max(...list)
    let minior = Math.min(...list)
    return `El numero mayor es: ${mayor}. El numero menor es: ${minior} `

}

console.log(mayorAndMinor(data))

/* 
3.- Necesitamos reestructurar la data para que quede de la siguiente forma:
  
      let restructuredData = [
          {
              name:
              lastname:
              age
          }
      ]
*/

const restructuredData = (array) => {

    let datos = array.reduce((accum, current) => {
        
        
        let obj = {  
            name: current[0],
            lastname: current[1], 
            age: current[2],
        }

        accum.push(obj)
        
        return accum
        
    }, [])

        return datos
}

console.log(restructuredData(data))