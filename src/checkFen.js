function checkFen(fenString) {
    var isValid = true;
    var fenArray = [];

    //check if fenString is null (When cancel is pressed during prompt)
    if (fenString == null) {
        return false;
    }

    //check if fenString is valid with respect to the number of pieces
    fenArray = getCapturedPieces(1, fenString);

    const piece = ["King", "Queen", "Rook", "Knight", "Bishop", "Pawn"];

    for (let i = 0; i < fenArray.length; i++) {
        if (fenArray[i] < 0) {
            isValid = false;
            if (i < 6) {
                customAlert("Invalid FEN position\nNumber of black " + piece[i] + " is not valid");
            }
            else {
                customAlert("Invalid FEN position\nNumber of white " + piece[i - 6] + " is not valid");
            }
            return isValid;
        }
    }

    //checking if both the kings are present
    if (fenArray[0] != 0) {
        customAlert("Invalid FEN position\nBlack king is not present");
        isValid = false;
        return isValid;
    }
    if (fenArray[6] != 0) {
        customAlert("Invalid FEN position\nWhite king is not present");
        isValid = false;
        return isValid;
    }

    var fenSplit = fenString.split('/');
    if (fenSplit.length != 8) {
        customAlert("Invalid FEN position\nNumber of rows is not 8");
        isValid = false;
        return isValid;
    }

    //checking the position of pawns
    if ((fenSplit[0].includes('P') && fenSplit[7].includes('P')) || (fenSplit[0].includes('p') && fenSplit[7].includes('p'))) {
        customAlert("Invalid FEN position\nInvalid pawn positions");
        isValid = false;
        return isValid;
    }

    //check if fenString may cause any error in generateBoard()
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
                customAlert("Invalid FEN position\nInvalid character present in row " + (i + 1));
                isValid = false;
                return isValid;
            }
        }
        if (rowCount != 8) {
            customAlert("Invalid FEN position\nNumber of squares in row " + (i + 1) + " is not 8");
            isValid = false;
            return isValid;
        }
    }

    return isValid;
}