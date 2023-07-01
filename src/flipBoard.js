function flipBoard() {
    var fen = '';
    var board = document.getElementById('chessboard');
    var cells = board.getElementsByClassName('cell');

    const pieces = {
        'king': 'k',
        'queen': 'q',
        'rook': 'r',
        'knight': 'n',
        'bishop': 'b',
        'pawn': 'p'
    };

    for (let i = 7; i >= 0; i--) {
        var nullCount = 0;
        for (let j = 7; j >= 0; j--) {
            var currentCell = cells[i * 8 + j].firstChild;
            if (currentCell == null) {
                nullCount++;
            }
            else {
                if (nullCount != 0) {
                    fen += nullCount;
                }
                nullCount = 0;
                var data = currentCell.getAttribute('src');
                var blackOrWhite = data.split('/')[3];
                var piece = data.split('/')[4].split('.')[0];
                var pieceChar = pieces[piece];
                if (blackOrWhite == 'white') {
                    pieceChar = pieceChar.toUpperCase();
                }
                fen += pieceChar;
            }
            if (nullCount != 0 && j == 0) {
                fen += nullCount;
            }
        }
        if (i != 0) {
            fen += '/';
        }
    }
    generateBoard(fen);
    return fen;
}
