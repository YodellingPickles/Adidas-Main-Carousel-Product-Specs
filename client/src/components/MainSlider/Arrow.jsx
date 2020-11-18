import React from 'react'
import styled from 'styled-components';
import left from '../../../../img/left-arrow.js'
import right from '../../../../img/right-arrow.js'

const Arrow = ({ direction, handleClick }) => {
  const Arrows = styled.div`
    display: flex;
    position: absolute;
    top: 43%;
    ${direction === 'right' ? `right: 25px` : `left: 25px`};
    height: 50px;
    width: 50px;
    justify-content: center;
    background: white;
    border: 1px solid black;
    cursor: pointer;
    align-items: center;
    transition: transform ease-in 0.1s;
    &:hover {
      transform: scale(1.1);
    }
    img {
      transform: translateX(${direction === 'left' ? '-2' : '2'}px);
      &:focus {
        outline: 0;
      }
    }
  `
  return (
    <Arrows onClick={handleClick}>
      {direction === 'right' ? <img style ={{width:'45%'}} src={right}/> : <img style ={{width:'45%'}} src={left}/>}
    </Arrows>
  )
}

export default Arrow