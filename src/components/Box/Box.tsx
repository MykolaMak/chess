import React from 'react';

import BOX_PIECES from '../../model/pieces'



const Box: React.FC = () => {
  const piecesWhite = BOX_PIECES.white.map(
    (piece: {symbol: string, type: string}) => (
      <div className={piece.type}>
        {piece.symbol}
      </div>));

  const piecesBlack = BOX_PIECES.black.map(
    (piece: {symbol: string, type: string}) => (
      <div className={piece.type}>
        {piece.symbol}
      </div>));

  return (
    <div className="box">
      <div className="box__pieces-white">{piecesWhite}</div>
      <div className="box__pieces-black">{piecesBlack}</div>
    </div>
  );
}

export default Box;