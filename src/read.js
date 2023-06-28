var fen = "r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1";

function resolvePieces() {
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

    while (indexCount != fen.length) {

        let ch = fen.charAt(indexCount);

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
