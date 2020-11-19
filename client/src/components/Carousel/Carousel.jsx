import React, { useState } from 'react';
import styled from 'styled-components';
import emptyHeart from '../../../../img/EmptyHeart.js';
import filledHeart from '../../../../img/FilledHeart.js';


const Carousel = ({ productCarousel, width, translate, transition }) => {
  const CarouselItemSection = styled.div`
    transform: translateX(-${translate}px);
    transition: transform ease-out 5s;
    position: absolute;
    width: ${width}px;
    left:0;
    right:0;
    display: flex;
    justify-content: space-around;
  `;


  return (
    <CarouselItemSection>
      {productCarousel.map((item, index) => <CarouselItems item={item} index={index}/>)}
    </CarouselItemSection>
  )
}

const CarouselItems = ({ item, index }) => {
  const [favorite, setFavorite] = useState(false)
  const CarouselItems = styled.div`
    width: 7.8%;
    height: 22vh;
    font-family: AdihausDIN;
    background-color: white;
    font-size: 12px;
    position: relative;
  `
  const ItemDesc = styled.div`
    margin-left: 10px;
    margin-top: 10px;
  `

  const ShoeFamily = styled.div`
    color: rgb(168,168,169);
    margin-bottom: 10px;
  `
  const Heart = styled.img`
    font-size: 20px;
    width:10%;
    position: absolute;
    right: 8%;
    top: 6%;
    cursor: pointer;
  `
  return (
    <CarouselItems>
      <img class={'recImg'} src={item.url}></img>
      <Heart src={favorite ? filledHeart : emptyHeart} onClick={()=>setFavorite(!favorite)}></Heart>
      <ItemDesc>
        <ShoeFamily>Originals</ShoeFamily>
        <div style={{'margin-bottom': '5px'}}>{item.name}</div>
        <div>{item.price}</div>
      </ItemDesc>
    </CarouselItems>
  )
}

export default Carousel