const clock = document.querySelector(".js-clock"),
    clockYear = clock.querySelector("span"),
    clockDate = clock.querySelector("h3");

function viewClock() {
    const today = new Date();
    const time = `${today.getHours() < 10? `0${today.getHours()}` : `${today.getHours()}`}`;
    const minute = `${today.getMinutes() < 10? `0${today.getMinutes()}` : `${today.getMinutes()}`}`;
    const seconds = `${today.getSeconds() < 10? `0${today.getSeconds()}` : `${today.getSeconds()}`}`;
    clockYear.innerText = `${today.getFullYear()}Y   ${today.getMonth()}M ${today.getDate()}D`;
    clockDate.innerText = `${time}:${minute}:${seconds}`;
}

function init() {
    viewClock();
    setInterval(viewClock, 1000);
};

init();