function generateBoard() {

    const chessboard = document.getElementById('chessboard');

    for(let rank = 0; rank < 8; rank++) {
        for (let square = 0; square < 8; square++) {
            var cell = document.createElement('div');
            cell.className = 'cell';

            // color squares alternatively
            if ((rank + square) % 2 == 0) {
                cell.style.backgroundColor = "#ecd3b9";
            } else {
                cell.style.backgroundColor = "#a16f5a";
            }

            chessboard.appendChild(cell);
        }
    }
}

generateBoard();