function generateBoard() {

    const position = resolvePieces();

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

            if (position[rank][square] != ' ') {
                // console.log(`[${rank}, ${square}]`); // works
                var piecePath = getPiece(position[rank][square]);

                var piece = document.createElement('img');
                piece.src = `../images/${piecePath}.svg`;
                cell.appendChild(piece);

            }

            chessboard.appendChild(cell);
        }
    }
}

generateBoard();
