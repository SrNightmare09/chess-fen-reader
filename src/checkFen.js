function checkFen(fenString) {
    var isValid = true;
    var fenArray = [];

    //check if fenString is valid with respect to the number of pieces
    fenArray = getCapturedPieces(1, fenString);

    for (let i = 0; i < fenArray.length; i++) {
        if (fenArray[i] < 0) {
            isValid = false;
            return isValid;
        }
    }

    //check if fenString may cause any error in generateBoard()

    var fenSplit = fenString.split('/');
    if (fenSplit.length != 8) {
        isValid = false;
        return isValid;
    }

    const pieces = ['k', 'q', 'r', 'n', 'b', 'p', 'K', 'Q', 'R', 'N', 'B', 'P'];

    for (let i = 0; i < fenSplit.length; i++) {
        var rowCount = 0;
        for (let j = 0; j < fenSplit[i].length; j++) {
            var y = fenSplit[i][j];
            if (y >= '1' && y <= '8') {
                rowCount += parseInt(fenSplit[i][j]);
            }
            //check if anything other than the pieces are present
            else if (pieces.includes(y)) {
                rowCount++;
            }
            else {
                isValid = false;
                return isValid;
            }
        }
        if (rowCount != 8) {
            isValid = false;
            return isValid;
        }
    }

    return isValid;
}