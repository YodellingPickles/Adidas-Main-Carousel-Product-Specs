import React, { useState } from 'react'
import styled from 'styled-components';
import left from '../../../../img/left-chevron.js'
import right from '../../../../img/right-chevron.js'

const CarouselArrows = ({ direction, handleClick }) => {
  const CarouselArrowDiv = styled.div`
    display: flex;
    position: absolute;
    top: 43%;
    ${direction === 'right' ? `right: 0` : `left: 0`};
    height: 25px;
    width: 25px;
    justify-content: center;
    background: white;
    cursor: pointer;
    align-items: center;
  `;
  return (
    <CarouselArrowDiv onClick={handleClick}>
      {direction === 'right' ? <img style ={{width:'55%'}} src={right}/> : <img style ={{width:'55%'}} src={left}/>}
    </CarouselArrowDiv>
  )
}

export default CarouselArrows;