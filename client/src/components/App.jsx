import React, { useState, useEffect, useRef } from 'react';
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
import '../../dist/style.css'

const App = () => {
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(.8);
  const [displaySet, setDisplay] = useState([]);
  const [colorSet, setColors] = useState([]);
  const [activeIndex, setIndex] = useState(0);
  const [activeColorIndex, setColorIndex] = useState(0);
  const [productRecs, setRecs] = useState([]);
  const [productCarousel, setCarousel] = useState([]);
  const widthRef = useRef(false)
  const getWidth = () => {
    if (widthRef.current) {
      return widthRef.current.getBoundingClientRect().width
    }
  }

  const getShoeFromDb = (colorIWantToRender) => {
    axios.get('/api/products/shoes')
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

  const getRecItemsFromDb = () => {
    axios.get('/api/products/recItems')
      .then(result => {
        setRecs(result.data)
      })
      .catch(err => console.log(err));
  }

  const getCarouselItem = () => {
    axios.get('/api/products/CarouselItem')
      .then(result => {
        setCarousel(result.data)
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getShoeFromDb();
    getRecItemsFromDb();
    getCarouselItem();
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
      setTranslate((displaySet.length - 1) * getWidth());
      setIndex(displaySet.length - 1);
    } else {
      setTranslate((activeIndex - 1) * getWidth());
      setIndex(activeIndex - 1);
    }
  };

  const changeSlide = (index) => {
      setTranslate(index * getWidth());
      setIndex(index);
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
      <SliderCSS ref={widthRef}>
        <ImageNav src={sliderNav}></ImageNav>
        <SliderContent
          translate={translate}
          transition={transition}
          width={getWidth() * displaySet.length}
          id='gallery'
        >
          {displaySet.map((image, index) => (
            <Slide image={image} key={image.id} index={index}/>
          ))}
        </SliderContent>
        <Arrow direction='left' handleClick={prevSlide}/>
        <Arrow direction='right' handleClick={nextSlide}/>
        <Dots slides={displaySet} activeIndex={activeIndex} changeSlide={changeSlide}/>
        {<div class='colorBar'>
          <Colors colorSet={colorSet} activeColorIndex={activeColorIndex} changeColors={changeColors}/>
        </div>}
      </SliderCSS>
      <NavBar />
      <ProductSpecs specImg={colorSet[Object.keys(colorSet)[0]]} productRecs={productRecs} productCarousel={productCarousel}/>
    </div>
  );
};

export default App;

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
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  overflow: hidden;
`;

