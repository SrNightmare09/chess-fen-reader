const { getPiece } = require('../src/getPiece');

test('check if valid pieces are returned', () => {
    const blackPawn_path = getPiece('p');

    expect(blackPawn_path).toBe('black/pawn');
})