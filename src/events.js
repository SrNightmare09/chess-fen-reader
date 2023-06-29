window.onload = generateDefaultBoard();

const button = document.getElementById('new-fen-button');

button.onclick = () => {
    let fen = prompt("Enter a valid FEN position");
    generateBoard(fen);
}

function generateDefaultBoard() {
    const defaultArrangement = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
    generateBoard(defaultArrangement);
}
