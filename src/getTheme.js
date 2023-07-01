const selectedTheme = document.getElementById('piece-theme');

function getTheme() {
    return selectedTheme.value;
}

selectedTheme.onchange = () => {
    getTheme();
    const defaultArrangement = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
    generateBoard(defaultArrangement);
}
