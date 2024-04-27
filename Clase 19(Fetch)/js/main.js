// const getKoders = async () => {
//     /*creamos la petición*/
//     /*Esperamos a que la petición se cumpla*/
//     let response = await fetch(
//       "https://javascript33g-default-rtdb.firebaseio.com/koders/.json"
//     );
  
//     /*Desempaquetamos el contenido de la respuesta, para extraer la información con la que vamos a trabajar*/
//     let koders = await response.json();
//     console.log(koders);
  
//     let keys = Object.keys(koders);
//     console.log(keys);
//     let values = Object.values(koders);
//     console.log(values);
  
//     let kodersArray = keys.map((key) => {
//       return { ...koders[key], key };
//     });
//     console.log(kodersArray);
//   };

const gerKoders = async () => {
    let response = await fetch(
        "https://practicajs33g-default-rtdb.firebaseio.com/koders/.json"
    )

    let koders = await response.json()
    
    let keys = Object.keys(koders)
  
   

    
    
}

gerKoders()}

const form

const postKoder = async (koderObject) => {
    
    let response = await fetch(
      "https://practicajs33g-default-rtdb.firebaseio.com/koders/.json",
      {
        method: "POST",
        body: JSON.stringify(koderObject),
      }
    );
    let data = await response.json();
    
    console.log(data);
};

const createListName = (person) =>{
    let {name, lastname, key} = person
    let createLi = document.createElement("li")
    let nameList = document.createTextNode(`${key}: ${lastname} ${name} `)
    createLi.append(nameList)

    return createLi
}

const printPerson = (array, wrapperId) =>{
    let getId = document.getElementById(wrapperId)

    while(getId.firstChild){
        getId.removeChild(getId.firstChild)
    }

    array.forEach(producto => getId.append(createListName(producto)));
}


