// ForEcha

let koders = ["Yair", "María", "Akira"];

koders.forEach((koder, index, arr) => {
  console.log(koder);
  console.log(index);
  console.log(arr);
  let firstLetter = koder.charAt(0);
  console.log(firstLetter);
});

let kodersObjects = [
  {
    name: "Yair",
    lastname: "Guadarrama",
  },
  {
    name: "María",
    lastname: "Moreno",
  },
  {
    name: "Akira",
    lastname: "Tanno",
  },
];

const createFullName = (koderObject) => {
  let fullName = `${koderObject.name} ${koderObject.lastname}`;
  return fullName;
};

const getKodersFullName = (kodersArray) => {
  let kodersFullNames = [];
  kodersArray.forEach((koder) => {
    kodersFullNames.push(createFullName(koder));
  });
};

// Map
// Recprre cada elemento del array y le aplica un callbackm
// Crea un nuevo arrac con el resultado del callback
// El array 

let number = [2, 6, 4]

const getSquereNumbers = (numbersArray) =>{
    let result = []
    numbersArray.forEach(number => {
        let squere = number *number
        result.push(squere)
        
    });
    return result
}

console.log(getSquereNumbers(number))



const getSquereNumbersMap = (numbersArray) =>{
  
    let result = numbersArray.map((number) => {
        let squere = number *number
        return squere
    })

    return result
}

console.log(getSquereNumbersMap(number))