const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A',
 'B', 'C', 'D', 'E', 'F', 'G']

const btnplay = document.getElementById("btn");
const color = document.querySelector('.color');

btnplay.addEventListener('click', randomItem)

function randomItem() {
    let hexColor = '#';
    let hexColors = '#';

    for (let i = 0; i < 6 ; i++) {
        hexColor += hex[random()]
        hexColors += hex[random()]
    }

   
    color.style.color = hexColors;
    document.body.style.backgroundColor = hexColor
}
function random() {
    return Math.floor(Math.random() * hex.length)
}