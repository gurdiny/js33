/*Funcion para mandar a llamar la info de los koders */
const getKoders = async () => {
  let response = await fetch(
    "https://practicajs33g-default-rtdb.firebaseio.com/koders/.json"
  );

  let koders = await response.json();

  let keys = Object.keys(koders);

  let kodersArray = keys.map((key) => {
    return { ...koders[key], key };
  });
   console.log(kodersArray)
  printPerson(kodersArray, "list-person");
};

/*Funcion para postear la info de los koders */
const postKoder = async (koderObject) => {
  let response = await fetch(
    "https://practicajs33g-default-rtdb.firebaseio.com/koders/.json",
    {
      method: "POST",
      body: JSON.stringify(koderObject),
    }
  );

  await response.json();
};

/*Funcion para editar la info de los koders */
const editKoders = async (koderKey, newData) =>{
    let response = await fetch(
        `https://practicajs33g-default-rtdb.firebaseio.com/koders/${koderKey}/.json`,
    {
      method: "PUT",
      body: JSON.stringify(newData),
    }
    )
    await response.json()
}


/*Funcion para eliminar la info de los koders */
const deleteKoders = async (koderKey) =>{
    let response = await fetch(`https://practicajs33g-default-rtdb.firebaseio.com/koders/${koderKey}/.json`,{
        method: "DELETE",
    }
)
 await response.json() 
}

//Llamar popup de edit
const editModal = new bootstrap.Modal(
    document.getElementById("edit-koder-modal")
);


/* crear Koders */
let saveKoderBtn = document.getElementById("button-form");
saveKoderBtn.addEventListener("click", async () => {
  let inputsForm = document.querySelectorAll("#form-person input");
  let koderObject = {};

  inputsForm.forEach(({ name, value }) => {
    koderObject[name] = value;
  });
  await postKoder(koderObject);
  await getKoders();
  inputsForm.forEach((input) => (input.value = ""));
});

/* guardar Koders Modificados */
const saveBtnKoders = document.getElementById("save-changes-btn")

saveBtnKoders.addEventListener("click", async (event) =>{

    let key = event.target.dataset.koderKey
    let editField = document.querySelectorAll("#edit-koder-form input")
    let object ={}

    editField.forEach(({name, value}) =>{
        object[name] = value
    })
    await editKoders(key, object)
    await getKoders()
    editModal.hide()
    
})


const createListName = (person) => {
  let { name, lastname, key, imagen } = person;
  let createLi = document.createElement("li");
  createLi.classList.add(
    "list-goup",
    "card",
    "d-flex",
    "align-items-center",
    "p-3"
  );

  let imagePerson = document.createElement("img")
  imagePerson.classList.add("rounded-circle","card-goup")
  imagePerson.setAttribute("src", imagen)
  imagePerson.style.width = "50px"

  let nameList = document.createElement("h4");
  nameList.classList.add("card-goup", "m-2");
  let namePerson = document.createTextNode(name);
  nameList.append(namePerson);

  let lastnameList = document.createElement("h6");
  lastnameList.classList.add("card-goup");
  let lastnamePerson = document.createTextNode(lastname);
  lastnameList.append(lastnamePerson);


  let divbtns = document.createElement("div")
  divbtns.classList.add("d-flex","gap-2")

  /*Edit btn*/
  let editBtn = document.createElement("button")
  editBtn.classList.add("btn", "btn-primary", "text-center")
  editBtn.innerHTML = "&#x270E;"
  editBtn.addEventListener("click", async () =>{
    document.getElementById("edit-name").value = name
    document.getElementById("edit-lastname").value = lastname
    document.getElementById("save-changes-btn").dataset.koderKey = key
    editModal.show();
  })


  /*Delete btn*/
  let deletebtn = document.createElement("button")
  deletebtn.classList.add("btn", "btn-danger", "text-center")
  deletebtn.innerText = "X";

  deletebtn.addEventListener("click", async () => {
    await deleteKoders(key)
    await getKoders()
  })

  divbtns.append(editBtn, deletebtn)
  createLi.append(imagePerson, nameList, lastnameList, divbtns);

  return createLi;
};

const printPerson = (array, wrapperId) => {
  let getId = document.getElementById(wrapperId);

  while (getId.firstChild) {
    getId.removeChild(getId.firstChild);
  }

  array.forEach((person) => getId.append(createListName(person)));
};

getKoders();
