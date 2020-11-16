import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent.jsx';
import axios from 'axios';
import Slide from './Slide.jsx';
import Arrow from './Arrow.jsx';
import Dots from './Dots.jsx';
import Colors from './Colors.jsx';
import sliderNav from '../../../img/sliderNav.js'

const Slider = () => {
  let getWidth = () => window.innerWidth
  let [translate, setTranslate] = useState(0)
  let [transition, setTransition] = useState(0.45)
  let [displaySet, setDisplay] = useState([])
  let [colorSet, setColors] = useState([])
  let [activeIndex, setIndex] = useState(0)
  let [activeColorIndex, setColorIndex] = useState(0)

  const getFromDb = (colorIWantToRender) => {
    axios.get('/api/shoes')
      .then(result => {
        const arrOfColors = Object.keys(result.data.colorSet);
        const colorRender = colorIWantToRender || arrOfColors[0];
        const firstDisplay = result.data.imgData.filter(x => {
          return x.color === colorRender;
        });
        setDisplay(firstDisplay);
        setColors(result.data.colorSet);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getFromDb();
  }, [])

  const nextSlide = () => {
    if(activeIndex === displaySet.length - 1) {
      setTranslate(0);
      setIndex(0);
    } else {
      setTranslate((activeIndex + 1) * getWidth());
      setIndex(activeIndex + 1);
    }
  }

  const prevSlide = () => {
    if(activeIndex === 0) {
      setTranslate(displaySet.length - 1 * getWidth());
      setIndex(displaySet.length - 1);
    } else {
      setTranslate((activeIndex - 1) * getWidth());
      setIndex(activeIndex - 1);
    }
  }

  const changeColors = (index) => {
    const arrOfColors = Object.keys(colorSet);
    setColorIndex(index);
    getFromDb(arrOfColors[index]);
  }

  return (
    <div>
      <SliderCSS>
        <ImageNav src={sliderNav}></ImageNav>
        <SliderContent
          translate={translate}
          transition={transition}
          width={getWidth() * displaySet.length}
        >
          {displaySet.map((image, index) => (
            <Slide image={image} key={index}/>
          ))}
        </SliderContent>
        <Arrow direction='left' handleClick={prevSlide}/>
        <Arrow direction='right' handleClick={nextSlide}/>
        <Dots slides={displaySet} activeIndex={activeIndex}/>
        {<div class='colorBar'>
          <Colors colorSet={colorSet} activeColorIndex={activeColorIndex} changeColors={changeColors}/>
        </div>}
      </SliderCSS>
    </div>
  )
}
const ImageNav = styled.img`
  position: absolute;
  z-index: 10;
  top: 3%;
  left: 1%;
  width: 300px;
  height: auto;
`
const SliderCSS = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`

export default Slider