import React from 'react'
import styled from 'styled-components';

const Colors = ({ colorSet, activeColorIndex, changeColors }) => {
  const ColorsCss = styled.div`
    display: flex;
    justify-content: center;
    font-size: 22px;
    font-weight: lighter;
  `
  const ColorText = styled.div`
    margin-right: 25px;
    text-align: right;
    align-self: center;
  `
  const arrOfColors = Object.keys(colorSet);
  const ArrOfColorsUrl = Object.values(colorSet)

  return (
    <ColorsCss>
      <ColorText>
        {arrOfColors.length} colors<br></br>available
      </ColorText>
        {ArrOfColorsUrl.map((colorUrl, index) => (
          <ColorButtons colorUrl={colorUrl} index={index} activeColorIndex={activeColorIndex === index} key={index} changeColors={changeColors}/>
        ))}
    </ColorsCss>
  )
}

const ColorButtons = ({ colorUrl, index, activeColorIndex, changeColors }) => {
  const ColorCss = styled.div`
    padding: 40px;
    margin-right: 10px;
    border: 1px solid black;
    cursor: pointer;
    background-image: url('${colorUrl}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-bottom: ${activeColorIndex ? '5px solid black' : '1px solid black'};
  `
  return (
    <ColorCss onClick={() => changeColors(index)}>
    </ColorCss>
  )
}

export default Colors