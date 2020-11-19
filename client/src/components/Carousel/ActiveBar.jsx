import React from 'react'
import styled from 'styled-components';

const Bar = ({ active }) => {
  const BarCSS = styled.div`
    box-sizing: border-box;
    margin-right: 10px;
    cursor: pointer;
    height: 30px;
    width:20px;
    border-bottom: ${active ? '3.5px solid black' : '1.5px solid black'};
  `;

  return (
    <BarCSS>
    </BarCSS>
  )
}

const Bars = ({ pages, carouselIndex }) => {
  const BarsCSS = styled.div`
    position: absolute;
    top: 90%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <BarsCSS>
      {pages.map((page, i) => (
        <Bar key={page} active={carouselIndex === i}/>
      ))}
    </BarsCSS>
  )
}

export default Bars