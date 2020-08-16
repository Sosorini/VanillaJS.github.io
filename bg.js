// body
//  fn init
// generate number
const body = document.querySelector("body");

const IMG_NUMBER = 6;


function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImg");
    // body.appendChild(image); 
    body.prepend(image); // 이렇게하면 뒤에 붙는다 + z-index
    // image.addEventListener("loadend", handleImgLoad); 이건 API받아올때
}

function getRanNumber() {
    return Math.floor(Math.random() * 6);
}

function init(){
    const imgNumber = getRanNumber();
    paintImage(imgNumber);
};

init();
