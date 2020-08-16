const user = document.querySelector(".js-user"),
    form = user.querySelector(".js-user-form"),
    input = user.querySelector(".js-user-input");

function handleSubmit(e){
    e.preventDefault();
    localStorage.setItem('user', input.value);
    paintUser(input.value);
};

function paintUser(userName){
    form.classList.add("disappear");
    const h3 = document.createElement("h3");
    h3.innerText = `WELCOME, ${userName}!!`;
    user.appendChild(h3);
};

function loadName() {
    const loadedUser = localStorage.getItem('user');
    if(loadedUser) {
        // 있으면 html 가리고
        // welcome user
        paintUser(loadedUser);
    };
};

function init() {
    loadName();
};
init();

form.addEventListener("submit", handleSubmit);
