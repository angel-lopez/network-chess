const PIECE = {
    KING: 'KI',
    QUEEN: 'QU',
    BISHOP: 'BI',
    KNIGHT: 'KN',
    ROOK: 'RO',
    PAWN: 'PA'
};

const COLOR = {
    WHITE: 'W',
    BLACK: 'B'
};

let gameState = {
    board: [],
    activeColor: COLOR.WHITE
};

function createPiece(color, type) {
    return { color, type };
}

function createInitialChessBoard() {
    const BACKLINE_SEQUENCE = [
        PIECE.ROOK,
        PIECE.KNIGHT,
        PIECE.BISHOP,
        PIECE.QUEEN,
        PIECE.KING,
        PIECE.BISHOP,
        PIECE.KNIGHT,
        PIECE.ROOK
    ];

    let board = [];
    let space = 0;

    // fill 1st row with black backline
    while (space < 8) {
        board[space] = createPiece(COLOR.BLACK, BACKLINE_SEQUENCE[space]);
        space++;
    }

    // fill 2nd row with black pawns
    while (space < 16) {
        board[space] = createPiece(COLOR.BLACK, PIECE.PAWN);
        space++;
    }

    // fill 3rd - 6th row with empty spaces
    while (space < 48) {
        board[space] = null;
        space++;
    }

    // fill 7th row with white pawns
    while (space < 56) {
        board[space] = createPiece(COLOR.WHITE, PIECE.PAWN);
        space++;
    }

    // fill 8th row with white backline
    while (space < 64) {
        board[space] = createPiece(COLOR.WHITE, BACKLINE_SEQUENCE[63 - space]);
        space++;
    }

    return board;
}

function getBoardString(board) {
    let boardString = "\n\n";

    for (let i = 0; i < board.length; i += 8) {
        for (let j = i; j < i + 8; j++) {
            let currentPiece = board[j];
            boardString += getPieceString(currentPiece) + " ";
        }
        boardString += "\n\n";
    }

    return boardString;
}

function getPieceString(piece) {
    if (piece === null) {
        return 'none';
    }

    return `${piece.color}_${piece.type}`;
}

function printBoard() {
    console.log(getBoardString(createInitialChessBoard()));
}

printBoard();
