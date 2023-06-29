function resolvePieces(fenString) {
    const pieceRegex = '[bpqrknBPQRKN]'
    const numRegex = '[12345678]'
    var indexCount = 0;
    var rank = 0;
    var pieces = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    while (indexCount != fenString.length) {

        let ch = fenString.charAt(indexCount);

        if (pieceRegex.match(ch)) {
            pieces[rank].push(ch);
        }

        if (numRegex.match(ch)) {
            for (let k = 0; k < parseInt(ch); k++) {
                pieces[rank].push(' ')
            }
        }

        if (ch == '/') {
            rank++;
            indexCount++;
            continue;
        }

        indexCount++;
    }

    return pieces;
}
