var fen = "r1bk3r/";

const pieceRegex = '[bpqrknBPQRKN]'
const numRegex = '[12345678]'

let pieces = [];

function resolvePieces() {

    for (let i = 0; i < fen.length - 1; i++) {

        if (pieceRegex.match(fen.charAt(i))) {
            pieces.push(fen.charAt(i));
        }

        if (numRegex.match(fen.charAt(i))) {

            for (let k = 0; k < parseInt(fen.charAt(i)); k++) {
                pieces.push(' ')
            }

        }

    }

    console.log(pieces)

}

resolvePieces();