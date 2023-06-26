var fen = "r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1";

const pieceRegex = '[bpqrknBPQRKN]'
const numRegex = '[12345678]'

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

function resolvePieces() {

    var indexCount = 0;
    var rank = 0;

    while (indexCount != fen.length) {

        if (pieceRegex.match(fen.charAt(indexCount))) {
            pieces[rank].push(fen.charAt(indexCount));
        }

        if (numRegex.match(fen.charAt(indexCount))) {

            for (let k = 0; k < parseInt(fen.charAt(indexCount)); k++) {
                pieces[rank].push(' ')
            }

        }

        if (fen.charAt(indexCount) == '/') {
            rank++;
            indexCount++;
            continue;
        }

        indexCount++;
    }

    return pieces;
}
