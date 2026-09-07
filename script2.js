
function addtask() {
    let input = document.getElementById("text");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function () {
        ul.removeChild(li);
    };

    li.appendChild(deleteBtn);
    ul.appendChild(li);

    input.value = "";
}

const addTask = addtask;

document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("text");
    if (input) {
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                addtask();
            }
        });
    }
});