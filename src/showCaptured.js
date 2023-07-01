function showCaptured() {
    var capturedPieces = getCapturedPieces(0, getCurrentFen());
    generateCapturedBoard(capturedPieces);
}

function generateCapturedBoard(fenString) {

    removeElementsById('captured');

    const position = resolvePieces(fenString);
    const captured = document.getElementById('captured');

    const blackCaptured = fenString.split('/')[0];
    const whiteCaptured = fenString.split('/')[1];

    for (let i = 0; i < 2; i++) {
        if (i == 0 && blackCaptured.length == 0) {
            continue;
        }
        for (let j = 0; j < 16; j++) {
            var cell = document.createElement('div');
            cell.className = 'cell';

            var pieceTheme = getTheme();
            if (i == 0) {
                if (blackCaptured[j] != undefined) {
                    var piecePath = getPiece(blackCaptured[j]);
                    var piece = document.createElement('img');
                    piece.src = `../images/${pieceTheme}/${piecePath}.svg`;
                    cell.appendChild(piece);
                }
            }
            else {
                if (whiteCaptured[j] != undefined) {
                    var piecePath = getPiece(whiteCaptured[j]);
                    var piece = document.createElement('img');
                    piece.src = `../images/${pieceTheme}/${piecePath}.svg`;
                    cell.appendChild(piece);
                }
            }

            captured.appendChild(cell);
        }
    }

}

function getCapturedPieces(x, fenString) {
    const pieces = {
        '0': 'k',
        '1': 'q',
        '2': 'r',
        '3': 'n',
        '4': 'b',
        '5': 'p',
        '6': 'K',
        '7': 'Q',
        '8': 'R',
        '9': 'N',
        '10': 'B',
        '11': 'P'

    };
    // 1 black king, 1 black queen, 2 black rooks, 2 black knights, 2 black bishops, 8 black pawns, 1 white king, 1 white queen, 2 white rooks, 2 white knights, 2 white bishops, 8 white pawns
    var TotalPieces = [1, 1, 2, 2, 2, 8, 1, 1, 2, 2, 2, 8];
    // currentFen = getCurrentFen();
    currentFen = fenString;
    capturedFen = '';
    for (let i = 0; i < currentFen.length; i++) {
        switch (currentFen[i]) {
            case 'k':
                TotalPieces[0]--;
                break;
            case 'q':
                TotalPieces[1]--;
                break;
            case 'r':
                TotalPieces[2]--;
                break;
            case 'n':
                TotalPieces[3]--;
                break;
            case 'b':
                TotalPieces[4]--;
                break;
            case 'p':
                TotalPieces[5]--;
                break;
            case 'K':
                TotalPieces[6]--;
                break;
            case 'Q':
                TotalPieces[7]--;
                break;
            case 'R':
                TotalPieces[8]--;
                break;
            case 'N':
                TotalPieces[9]--;
                break;
            case 'B':
                TotalPieces[10]--;
                break;
            case 'P':
                TotalPieces[11]--;
                break;
            default:
                break;
        }
    }

    //parameter x = 0 for fen string, x = 1 for array
    if (x == 0) {
        for (let i = 0; i < TotalPieces.length; i++) {
            for (let j = 0; j < TotalPieces[i]; j++) {
                capturedFen += pieces[i];
            }
            if (i == 5) {
                capturedFen += '/';
            }
        }
        return capturedFen;
    }

    if (x == 1) {
        return TotalPieces;
    }

}

const removeElementsById = (IdName) => {
    const elements = document.getElementById(IdName);
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
};
