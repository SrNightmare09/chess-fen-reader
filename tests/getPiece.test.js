const { getPiece } = require('../src/getPiece');

test('Check if pieces returned are valid (black)', () => {
    const blackPawn_path = getPiece('p');
    const blackBishop_path = getPiece('b');
    const blackKnight_path = getPiece('n');
    const blackRook_path = getPiece('r');
    const blackQueen_path = getPiece('q');
    const blackKing_path = getPiece('k');
    // is there any better way to do this?
    expect(blackPawn_path).toBe('black/pawn');
    expect(blackBishop_path).toBe('black/bishop');
    expect(blackKnight_path).toBe('black/knight');
    expect(blackRook_path).toBe('black/rook');
    expect(blackQueen_path).toBe('black/queen');
    expect(blackKing_path).toBe('black/king');
});

test('Check if pieces returned are valid (white)', () => {
    const whitePawn_path = getPiece('P');
    const whiteBishop_path = getPiece('B');
    const whiteKnight_path = getPiece('N');
    const whiteRook_path = getPiece('R');
    const whiteQueen_path = getPiece('Q');
    const whiteKing_path = getPiece('K');

    expect(whitePawn_path).toBe('white/pawn');
    expect(whiteBishop_path).toBe('white/bishop');
    expect(whiteKnight_path).toBe('white/knight');
    expect(whiteRook_path).toBe('white/rook');
    expect(whiteQueen_path).toBe('white/queen');
    expect(whiteKing_path).toBe('white/king');
});
