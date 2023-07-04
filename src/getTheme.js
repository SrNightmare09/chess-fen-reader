const CBurnett_theme = document.getElementById('cburnett-theme');
const doodle_theme = document.getElementById('doodle-theme');
let piece_theme = "cburnett"

function getTheme() {
    return piece_theme;
}

CBurnett_theme.onclick = () => {
    piece_theme = "cburnett";
    callGenerateBoard();
}
doodle_theme.onclick = () => {
    piece_theme = "doodle";
    callGenerateBoard();
}

const brown_theme = document.getElementById('brown-theme');
const green_theme = document.getElementById('green-theme');
const blue_theme = document.getElementById('blue-theme');
const pink_theme = document.getElementById('pink-theme');
let theme = "brown";

function getCellTheme() {
    return theme;
}

function callGenerateBoard() {
    let currentArrangement = getCurrentFen();
    generateBoard(currentArrangement);
    checkPreviousState();
}
brown_theme.onclick = () => {
    theme = "brown";
    callGenerateBoard();
}
green_theme.onclick = () => {
    theme = "green";
    callGenerateBoard();
}
blue_theme.onclick = () => {
    theme = "blue";
    callGenerateBoard();
}
pink_theme.onclick = () => {
    theme = "pink";
    callGenerateBoard();
}