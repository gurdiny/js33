/*
  1.- Activar el formulario, de tal forma que al dar click en el botón "crear usuario" se genere un objeto con la siguiente forma:

  -tenemos que tener un objeto vacio
  -asociar cada elemento del objeto con cada uno de inputs del forms
  -al dar click llenar con la informacion de los inputs en los elementos del objeto correspondiente
  person = {
    name:"...",
    email:"...",
    password:"..."
  }*/

  // Separa tus funciones
  // No agregues el ultimo aaray, limpia el contenedor y vuelve a imprimirlo
  // para limpiarlo usa el While (wraper.firstchild)
let btnForm = document.getElementById("btn-person-form")
let personForm = document.getElementById("form-id")

let person = []
btnForm.addEventListener( "click", (event) =>{
  event.preventDefault()
  
  let inputList = document.querySelectorAll("#form-id input")
  let listPersons = {}
  inputList.forEach((element) =>{
    listPersons[element.name] = element.value
  })
  
  console.log(listPersons)
  person = [...person, listPersons]
  // person.forEach(Element => {
  
    let {Email, Nombre, Password} = person[person.length - 1]
    let ulListName = document.getElementById("list-name")
    let liListaName = document.createElement("li")
    
    let mailPerson = document.createTextNode(Email).nodeValue;
    let namePerosn = document.createTextNode(Nombre).nodeValue;
    let paswordPerson = document.createTextNode(Password).nodeValue;
    let infoPerson = `Mail: ${mailPerson} FullName:${namePerosn} Pass: ${paswordPerson}`
    
    
    liListaName.append(infoPerson)
    ulListName.append(liListaName)

    console.log(person)
  })
  


// const printForm = () =>{
//   // event.preventDefault()
  
//   let inputList = document.querySelectorAll("#person-form input")
//   let listPersons = {}
//   inputList.forEach((Element) =>{
//     listPersons[Element.name] = Element.value
//   })
  

//   person = [...person, listPersons]
  
  
//   // person.forEach(Element => {
  
//     let {Email, Nombre, Password} = person[person.length - 1]
//     let ulListName = document.getElementById("list-name")
//     let liListaName = document.createElement("li")
    
//     let mailPerson = document.createTextNode(Email).nodeValue;
//     let namePerosn = document.createTextNode(Nombre).nodeValue;
//     let paswordPerson = document.createTextNode(Password).nodeValue;
//     let infoPerson = `${mailPerson} ${namePerosn} ${paswordPerson}`
    
    
//     liListaName.append(infoPerson)
//     ulListName.append(liListaName)


// }









  /* 
   2.- Agregar a la funcionalidad, una lista "persons", de tal forma que al dar click en el boton, la persona creada en el paso anterior, se agregue a esa lista "persons"

  persons = []
  person -> persons

  3.- Agregar la funcionalidad para que cada que agregue una persona nueva, esta se vea reflejada junto con las anteriores en la interfaz de usuario
   */