var fen = "4k2r/6r1/8/8/8/8/3R4/R3K3";

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
