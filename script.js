
const widthSecond = document.querySelector('#width_second');
const heightSecond = document.querySelector ('#height_second');
const colorSecond = document.querySelector ('#color_second');

const widthThird = document.querySelector ('#width_third');
const heightThird = document.querySelector ('#height_third');
const colorThird = document.querySelector ('#color_third');

const colorFourth = document.querySelector ('#box');
const secondBox = document.querySelector ('#second');

secondBox.addEventListener('change', updateSecond);

function updateSecond (e) {
    let target = e.target.id;
    console.log(target)

    if (target === "width_second") {
        updateWidth();
    }
    else if (target === "height_second") {
        updateHeight();
    }
    else if (target === "color_second")  {
        updateColor();
    }
}

function updateWidth() {
    const newWidth = widthSecond.value + "px";
    widthThird.innerHTML = newWidth;
    colorFourth.style.width = newWidth;
}

function updateHeight() {
    const newHeight = heightSecond.value + "px";
    heightThird.innerHTML = newHeight;
    colorFourth.style.height = newHeight;
}

function updateColor() {
    const newColor = colorSecond.value;
    colorThird.innerHTML = newColor;
    colorFourth.style.background = newColor;
}

// else if == elif