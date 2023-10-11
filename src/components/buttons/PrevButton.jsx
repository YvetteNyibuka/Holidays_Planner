import React from 'react';

const PrevButton = ({ onClick }) => {
  return (
    <button className='prevButton' onClick={onClick}>
      Prev
    </button>
  );
};

export default PrevButton;
