import React from 'react'
import styled from 'styled-components';

const Dot = ({ img, active, index, changeSlide }) => {
  const DotCss = styled.div`
    padding: 14px;
    margin-right: 10px;
    border: 1px solid black;
    cursor: pointer;
    background-image: url('${img}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-bottom: ${active ? '3px solid black' : '1px solid black'};
  `;

  return (
    <DotCss onClick={() => changeSlide(index)}/>
  )
}

const Dots = ({ slides, activeIndex, changeSlide }) => {
  const DotsCss = styled.div`
    position: absolute;
    top: 82%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <DotsCss>
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeIndex === i} img={slide.url} index={i} changeSlide={changeSlide}/>
        ))}
    </DotsCss>
  )
}

export default Dots;
