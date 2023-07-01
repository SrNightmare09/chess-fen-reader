function getPiece(char) {

    const pieces = {
        'k': 'king',
        'q': 'queen',
        'r': 'rook',
        'n': 'knight',
        'b': 'bishop',
        'p': 'pawn'
    };

    let uppercase = (char === char.toUpperCase()) ? true : false;
    char = char.toLowerCase();
    var piece = pieces[char];

    return (uppercase) ? `white/${piece}` : `black/${piece}`;

}
