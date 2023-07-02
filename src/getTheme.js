const selectedTheme = document.getElementById('piece-theme');

function getTheme() {
    return selectedTheme.value;
}

selectedTheme.onchange = () => {
    getTheme();
    currentArrangement = getCurrentFen();
    generateBoard(currentArrangement);
    checkPreviousState();
}

const selectedCellTheme = document.getElementById('board-theme');

function getCellTheme() {
    return selectedCellTheme.value;
}

selectedCellTheme.onchange = () => {
    getCellTheme();
    currentArrangement = getCurrentFen();
    generateBoard(currentArrangement);
    checkPreviousState();
}