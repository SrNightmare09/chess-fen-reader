function getCurrentFen() {
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

    for (let i = 0; i < 8; i++) {
        var nullCount = 0;
        for (let j = 0; j < 8; j++) {
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
                blackOrWhite = data.split('/')[2];
                var piece = data.split('/')[3].split('.')[0];
                var pieceChar = pieces[piece];
                if (blackOrWhite == 'white') {
                    pieceChar = pieceChar.toUpperCase();
                }
                fen += pieceChar;
            }
            if (nullCount != 0 && j == 7) {
                fen += nullCount;
            }
        }
        if (i != 7) {
            fen += '/';
        }
    }
    return fen;
}