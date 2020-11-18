import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SliderContent from './MainSlider/SliderContent.jsx';
import Slide from './MainSlider/Slide.jsx';
import Arrow from './MainSlider/Arrow.jsx';
import Dots from './MainSlider/Dots.jsx';
import Colors from './MainSlider/Colors.jsx';
import sliderNav from '../../../img/sliderNav.js';
import NavBar from './Carousel/NavBar.jsx';
import ProductSpecs from './Carousel/ProductSpecs.jsx';

const App = () => {
  const getWidth = () => window.innerWidth;
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(0.45);
  const [displaySet, setDisplay] = useState([]);
  const [colorSet, setColors] = useState([]);
  const [activeIndex, setIndex] = useState(0);
  const [activeColorIndex, setColorIndex] = useState(0);
  const [productRecs, setRecs] = useState([]);

  const getShoeFromDb = (colorIWantToRender) => {
    axios.get('/api/shoes')
      .then(result => {
        const arrOfColors = Object.keys(result.data.colorSet);
        const colorRender = colorIWantToRender || arrOfColors[0];
        const firstDisplay = result.data.imgData.filter(x =>
          x.color === colorRender);
        setDisplay(firstDisplay);
        setColors(result.data.colorSet);
      })
      .catch(err => console.log(err));
  }

  const getRecItemsFromDb = (colorIWantToRender) => {
    axios.get('/api/recItems')
      .then(result => {
        setRecs(result.data)
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getShoeFromDb();
    getRecItemsFromDb();
  }, []);

  const nextSlide = () => {
    if (activeIndex === displaySet.length - 1) {
      setTranslate(0);
      setIndex(0);
    } else {
      setTranslate((activeIndex + 1) * getWidth());
      setIndex(activeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      setTranslate(displaySet.length - 1 * getWidth());
      setIndex(displaySet.length - 1);
    } else {
      setTranslate((activeIndex - 1) * getWidth());
      setIndex(activeIndex - 1);
    }
  };

  const changeColors = (index) => {
    const arrOfColors = Object.keys(colorSet);
    setColorIndex(index);
    setIndex(0);
    setTranslate(0);
    getShoeFromDb(arrOfColors[index]);
  };

  return (
    <div>
      <SliderCSS>
        <ImageNav src={sliderNav}></ImageNav>
        <SliderContent
          translate={translate}
          transition={transition}
          width={getWidth() * displaySet.length}
        >
          {displaySet.map((image) => (
            <Slide image={image} />
          ))}
        </SliderContent>
        <Arrow direction='left' handleClick={prevSlide}/>
        <Arrow direction='right' handleClick={nextSlide}/>
        <Dots slides={displaySet} activeIndex={activeIndex}/>
        {<div class='colorBar'>
          <Colors colorSet={colorSet} activeColorIndex={activeColorIndex} changeColors={changeColors}/>
        </div>}
      </SliderCSS>
      <NavBar />
      <ProductSpecs specImg={colorSet[Object.keys(colorSet)[0]]} productRecs={productRecs}/>
    </div>
  );
};
const ImageNav = styled.img`
  position: absolute;
  z-index: 10;
  top: 1%;
  left: 1%;
  width: 250px;
  height: auto;
`;

const SliderCSS = styled.div`
  position: relative;
  height: 85vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 20px;
`;

export default App;
