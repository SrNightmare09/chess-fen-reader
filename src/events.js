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

const flipBoardButton = document.getElementById('flip-board-button');

flipBoardButton.onclick = () => {
    const board = document.getElementById('board');
    flipBoard();
}

const showCapturedPiecesButton = document.getElementById('show-captured-button');

showCapturedPiecesButton.onclick = () => {
    const capturedPieces = document.getElementById('captured-pieces');
    showCaptured();
}