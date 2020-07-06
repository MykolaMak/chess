import React from 'react';

const Board: React.FC = () => {
  const CELL_COUNT = 8;
  const cellArray = new Array(CELL_COUNT).fill(null);
  const renderCells = (indexOfRow: number) => (cellArray.map((_, indexCol) => {
    const isBlack = indexOfRow % 2 ^ indexCol % 2;

    return (<div className={isBlack ? 'cell black' : 'cell white'}>{indexOfRow}</div>);
    }
  ));


  return (
  <div className="board">
    { cellArray.map((_, index: number) => (<div className="row">
      { renderCells(index) }
    </div>)) }
  </div>
)}

export default Board;
