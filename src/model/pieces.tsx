const PIECES_WHITE = {
  Pawn: {
    type: 'Pawn',
    symbol: '♙',
  },
  Bishop: {
    type: 'Bishop',
    symbol: '♗',
  },
  Knight: {
    type: 'Knight',
    symbol: '♘',
  },
  Rook: {
    type: 'Rook',
    symbol: '♖',
  },
  Queen: {
    type: 'Queen',
    symbol: '♕',
  },
  King: {
    type: 'King',
    symbol: '♔',
  },
};

const PIECES_BLACK = {
  Pawn: {
    type: 'Pawn',
    symbol: '♟︎',
  },
  Bishop: {
    type: 'Bishop',
    symbol: '♝',
  },
  Knight: {
    type: 'Knight',
    symbol: '♞',
  },
  Rook: {
    type: 'Rook',
    symbol: '♜',
  },
  Queen: {
    type: 'Queen',
    symbol: '♛',
  },
  King: {
    type: 'King',
    symbol: '♚',
  },
};

const BOX_PIECES = {
  white: [PIECES_WHITE.Pawn, PIECES_WHITE.Bishop, PIECES_WHITE.Knight, PIECES_WHITE.Rook, PIECES_WHITE.Queen, PIECES_WHITE.King],
  black: [PIECES_BLACK.Pawn, PIECES_BLACK.Bishop, PIECES_BLACK.Knight, PIECES_BLACK.Rook, PIECES_BLACK.Queen, PIECES_BLACK.King]
};

export default BOX_PIECES;