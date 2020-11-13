import React from 'react'
import styled from 'styled-components';

const Dot = ({ img, active }) => {
  const DotCss = styled.div`
    padding: 15px;
    margin-right: 10px;
    border: 1px solid black;
    cursor: pointer;
    background-image: url('${img}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-bottom: ${active ? '3px solid black' : '1px solid black'};
  `
  return (
    <DotCss>
    </DotCss>
  )
}

const Dots = ({ slides, activeIndex }) => {
  const DotsCss = styled.div`
    position: absolute;
    top: 85%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  return (
    <DotsCss>
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeIndex === i} img={slide.url}/>
      ))}
    </DotsCss>
  )
}

export default Dots