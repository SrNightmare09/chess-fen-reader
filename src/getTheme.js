const selectedTheme = document.getElementById('piece-theme');

function getTheme() {
    return selectedTheme.value;
}

selectedTheme.onchange = () => {
    getTheme();
    currentArrangement = getCurrentFen();
    generateBoard(currentArrangement);
}
