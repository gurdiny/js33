const checkboxes = document.querySelectorAll(".checkbox-input")
const boxes = document.querySelectorAll(".boxes")

checkboxes.forEach((checkbox, index) => {

    checkbox.addEventListener("click", () => {
    checkbox.checked ? boxes[index].classList.add("invisible") : boxes[index].classList.remove("invisible")
    })
})
