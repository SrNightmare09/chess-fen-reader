function generateBoard(fenString) {

    removeElementsByClassName('cell');

    const position = resolvePieces(fenString);
    const chessboard = document.getElementById('chessboard');

    const cellThemeColour = {
        'brown': ['#b58863', '#f0d9b5'],
        'green': ['#769656', '#eeeed2'],
        'blue': ['#4b7399', '#eae9d2'],
        'pink': ['#fcd8dd', '#ffffff'],
    }

    for (let rank = 0; rank < 8; rank++) {
        for (let square = 0; square < 8; square++) {
            var cell = document.createElement('div');
            cell.className = 'cell';

            var cellTheme = getCellTheme();
            var cellColour = cellThemeColour[cellTheme];

            // color squares alternatively
            if ((rank + square) % 2 == 0) {
                cell.style.backgroundColor = cellColour[0];
            } else {
                cell.style.backgroundColor = cellColour[1];
            }

            if (position[rank][square] != ' ') {
                var piecePath = getPiece(position[rank][square]);

                var piece = document.createElement('img');
                var pieceTheme = getTheme();
                piece.src = `../images/${pieceTheme}/${piecePath}.svg`;
                cell.appendChild(piece);

            }

            chessboard.appendChild(cell);
        }
    }
}

const removeElementsByClassName = (className) => {
    const elements = document.querySelectorAll(`.${className}`);

    elements.forEach((element) => {
        element.parentNode.removeChild(element);
    });
};
