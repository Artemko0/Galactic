let shootCount = 5;
let translateX = 0;
let translateY = 0;
let maxMove = window.screen.width / 2 - 200;

const quantityShoot  =  5; 
let currentShut = quantityShoot;

function handKeyPress(event) {
    let img = document.getElementById("ship")
    let key = event.key;

    if(key === "ArrowLeft") {
        if(translateX > -maxMove) {
            translateX = translateX - 10;
        }
        img.style.transform = `tranlate(${translateX}px, ${translateY}px)`;
    }
    else if(key === "ArrowRight") {
        if(translateY < maxMove) {
            translateX = translateX + 10;
        }
        img.style.transform = `tranlate(${translateX}px, ${translateY}px)`;
    }
    else if(key === " ") {
        if(currentShut  > 0) {
            currentShut = currentShut - 1;
            alert("Space was pressed. " +currentShut+ " shoots left.");
        }
        else {
            currentShut = quantityShoot;
        }
    }
    else if(key === "c" ) {
        if(quantityShoot > 0) {
            alert("Recharge no required");
        }
    }
}
  
function startGame() {
    let button = document.getElementById("startButton");
    button.style.display = "none";

    let img = document.getElementById("ship");
    translateY += 350;
    img.style.transform = " translateY (" + translateY + " px)";

    const imageNames = ["ufo1.png", "ufo2.png", "ufo3.png"];
    const imageContainer = document.getElementById("imageContainer");
    let imageId = 0;
    for(let i = 0; i < 10; i++) {
        const image = document.createElement("img");
        const imageName = imageNames[imageId];
        image.src = imageName;
        image.className = "ufo";
        imageContainer.appendChild(image);

        imageId++;
        if(imageId == 3) {
            imageId = 0;
        }
    }

    window.addEventListener("keydown", handKeyPress);
}