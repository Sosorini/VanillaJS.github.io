const toDos = document.querySelector(".js-todo"),
    toDoForm = toDos.querySelector(".js-todo-list"),
    toDoInput = toDos.querySelector(".js-todo-input"),
    ul = toDos.querySelector("ul");

const TODOS = 'todos';
let toDoList = [];

function findMatch(toDoId) {
    return toDoList.find(function (toDo) {
        return JSON.stringify(toDo.id) === toDoId;
    });
}
function findNotMatch(toDoId){
    toDoList = toDoList.filter(function(toDo) {
        return JSON.stringify(toDo.id) !== toDoId;
    });
};

function delToDo(e) {
    e.preventDefault();
    const targetLi = e.target.parentNode;
    targetLi.parentNode.removeChild(targetLi);
    findNotMatch(targetLi.id);
    saveToDo();
};

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDoList.length + 1;
    li.innerText = text;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", delToDo);
    li.id = newId;
    li.append(delBtn);
    ul.appendChild(li);
    const toDoObj = {
        id: newId,
        text
    };
    toDoList.push(toDoObj);
    saveToDo(toDoObj);
};

function saveToDo() {
    localStorage.setItem(TODOS, JSON.stringify(toDoList));
};

function handleToDoSubmit(e) {
    e.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
};


function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS);
    if (loadedToDos) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (todo) {
            paintToDo(todo.text);
        });
    };
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleToDoSubmit);
};
init();