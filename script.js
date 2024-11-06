const ul = document.getElementById("ul")
const input = document.getElementById("input")
const button = document.getElementById("button")


const li = document.createElement("li");
const span = document.createElement("span");
const button2 = document.createElement("button");



ul.appendChild(span);
ul.appendChild(button2);


button2.textContent = "delete";
span.textContent = input.value

button.addEventListener("click", () => {
    if (input.value) {
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = "";
    }
})


button2.addEventListener("click", () => {
    li.remove()
})