import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent.jsx';
import axios from 'axios'
import Slide from './Slide.jsx'
import Arrow from './Arrow.jsx'
import Dots from './Dots.jsx'

const Slider = () => {
  const getWidth = () => window.innerWidth
  const [translate, setTranslate] = useState(0)
  const [transition, setTransition] = useState(0.45)
  const [displaySet, setDisplay] = useState([])
  const [activeIndex, setIndex] = useState(0)

  useEffect(() => {
    axios.get('/api/shoes')
      .then(result => {
        setDisplay(result.data)
      })
      .catch(err => console.log(err))
  }, [])

  const nextSlide = () => {
    if(activeIndex === displaySet.length - 1) {
      setTranslate(0);
      setIndex(0);
    } else {
      setTranslate((activeIndex + 1) * getWidth())
      setIndex(activeIndex + 1);
    }
  }

  const prevSlide = () => {
    if(activeIndex === 0) {
      setTranslate(displaySet.length - 1 * getWidth());
      setIndex(displaySet.length - 1);
    } else {
      setTranslate((activeIndex - 1) * getWidth())
      setIndex(activeIndex - 1);
    }
  }

  return (
    <SliderCSS>
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
    </SliderCSS>
  )
}
const ImageNav = styled.div`
  position: absolute;
  z-index: 10;
  text-decoration: underline;
`
const SliderCSS = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`
export default Slider