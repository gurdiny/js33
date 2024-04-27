let butonId = document.getElementById("button-form")

let productsList = []
butonId.addEventListener("click", (event) =>{
    event.preventDefault();
  let inputProducts = document.querySelectorAll("#product-id input")
   let productObject = {}
   inputProducts.forEach(input => {
    let nameIput = input.name
    let valueInput = input.value 
    
    productObject[nameIput] = valueInput
    
   });

   productsList = [...productsList, productObject]
   
   
   
   printProducts(productsList, "cards-products")
   printOptions(productsList, "select-categories")

 
   
   
})

const createSingleCard = (singleProduct) => {
    let {category, product, description, price, image} = singleProduct
    let createli = document.createElement("li")
    createli.classList.add("p-2","align-items-center","d-flex","card","rounded","border","bg-dark","col-3", "m-2")

    let imageProduct = document.createElement("img")
    imageProduct.setAttribute("src", image);
    imageProduct.classList.add("img-product", "rounded")
    imageProduct.style.width = "150px";
    imageProduct.style.height = "150px";

    let categoryElement = document.createElement("span")
    categoryElement.classList.add("text-white")  
    let categoryName = document.createTextNode(category)  
    categoryElement.append(categoryName)
    
    let nameProducth3 = document.createElement("h3")
    nameProducth3.classList.add("text-white", "text-center")
    let nameProduct = document.createTextNode(product)
    nameProducth3.append(nameProduct)

    let priceElement = document.createElement("h6")
    priceElement.classList.add("text-white") 
    let priceName = document.createTextNode(`$${price} mxn`)
    priceElement.append(priceName)

    let descriptionElement = document.createElement("p")
    descriptionElement.classList.add("text-white", "text-center")
    let descriptionName = document.createTextNode(description)
    descriptionElement.append(descriptionName)

    createli.append( imageProduct, categoryElement, nameProducth3, priceElement, descriptionElement)

    return createli
}




const printProducts = (productsArray, wrapeerId) => {

    let getId = document.getElementById(wrapeerId)

    while (getId.firstChild) {
        getId.removeChild(getId.firstChild);
    }

    productsArray.forEach((product) => getId.append(createSingleCard(product)))

}

/* crear options con las categorías
    extraer categorías de los productos creados
    por cada categoría creada, hacer un option del select

*/
// const createOptionSelect = (categories) => {
//     let {category} = categories
//     let createoptions = document.createElement("option")
//     let textOption = document.createTextNode(category)
//     createoptions.append(textOption)
//     createoptions.value = category

    
    
//     return createoptions
    
// }

const createOptionSelect = (category) => {
    let option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    return option;
}


const printOptions = (arrayProducts, wrapperId) => {
    let getId = document.getElementById(wrapperId);

    while (getId.firstChild) {
        getId.removeChild(getId.firstChild);
    }

    const uniqueCategories = arrayProducts.reduce((accumulator, currentProduct) => {
        let {category} = currentProduct
    
        if (!accumulator.includes(category)) {
            accumulator.push(category);
        }
        return accumulator;
    }, []);

    uniqueCategories.forEach(category => {
        getId.appendChild(createOptionSelect(category));
    });
    // printProducts(productsList, "cards-products")
}

// const checkboxes = document.querySelectorAll(".form-control")
// const boxes = document.querySelectorAll(".card")
    
// checkboxes.forEach((checkbox, index) => {
    
//         checkbox.addEventListener("click", () => {
//         checkbox.checked ? boxes[index].classList.add("invisible") : boxes[index].classList.remove("invisible")
//         })
// })

