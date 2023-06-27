function getPiece(char) {

    const pieces = {
        'k': 'king',
        'q': 'queen',
        'r': 'rook',
        'n': 'knight',
        'b': 'bishop',
        'p': 'pawn'
    };

    let uppercase;
    if (char === char.toUpperCase()) {
        uppercase = true;
    } else {
        uppercase = false;
    }
    char = char.toLowerCase();
    var piece = pieces[char];

    if (uppercase) {
        return `white/${piece}`;
    } else {
        return `black/${piece}`;
    }
}
