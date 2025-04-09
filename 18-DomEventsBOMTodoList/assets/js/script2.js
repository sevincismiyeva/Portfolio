let todoAdd_input = document.querySelector(".todoAdd_input");
let todoAdd_btn = document.querySelector(".todoAdd_btn");
let list = document.querySelector(".list");
let deleteAll = document.querySelector(".deleteAll");
let count = 1;

todoAdd_btn.addEventListener("click", buton);

function buton(e) {
    e.preventDefault();

    if (todoAdd_input.value !== "") {
        let li = document.createElement("li");
        li.className = "list_li";


        let number = document.createElement("span");
        number.textContent = count++; 
        li.appendChild(number);

        let checkbox = document.createElement("input");
        checkbox.className = "list_check";
        checkbox.type = "checkbox";

        li.appendChild(checkbox);

        checkbox.addEventListener("click", function () {
            if (checkbox.checked) {
                li.style.textDecoration = "line-through";
                li.style.color = "green";
            } else {
                li.style.textDecoration = "none";
                li.style.color = "red";
            }
        });

        let text = document.createElement("span");
        text.textContent = todoAdd_input.value;
        li.appendChild(text);

        let editBtn = document.createElement("button");
        editBtn.className= "editbtn"
        editBtn.textContent = "Edit";
        li.appendChild(editBtn);

        editBtn.addEventListener("click", function () {
            let newText = prompt("Düzəliş edin:", text.textContent);
            if (newText) {
                text.textContent = newText;
            }
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        li.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", function () {
            if (checkbox.checked) {
                li.remove();
            } else {
                alert("Bu todoList hələ icra olunmayıb");
            }
        });


        list.appendChild(li);

    } else {
        alert("Boş əlavə etmək olmaz");
    }

    todoAdd_input.value = "";

};

deleteAll.addEventListener("click", function () {
    if (list.textContent !== "") {
        confirm("Hamısını silmək istəyirsiniz?")
        list.textContent = "";
    } else {
        alert("Zatən boşdur")
    }
});



