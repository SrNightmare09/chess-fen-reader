window.onload = generateDefaultBoard();

var isShowCaptured = false;

const button = document.getElementById('new-fen-button');

function customAlert(message) {
    alert(message);
}

button.onclick = () => {
    let fen = prompt("Enter a valid FEN position");
    const x = checkFen(fen);
    if (!x) {
        return;
    }
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
    if (isShowCaptured) {
        showCaptured();
    }
}

const showCapturedPiecesButton = document.getElementById('show-captured-button');

showCapturedPiecesButton.onclick = () => {
    const capturedPieces = document.getElementById('captured-pieces');
    showCaptured();
    isShowCaptured = !isShowCaptured;
}

function checkPreviousState() {
    if (isShowCaptured) {
        showCaptured();
    }
}
