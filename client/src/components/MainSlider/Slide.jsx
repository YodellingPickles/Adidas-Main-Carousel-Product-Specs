import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Slide = ({ image, index }) => {
  let [zoom, setZoom] = useState(false);

  const Content = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('${image.url}');
    background-size: 850px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: ${zoom ? 'zoom-out' : 'zoom-in'}
  `;

  useEffect (() => {
    if (zoom) {
      let container = document.getElementById(`zoomImg${index}`);
      let imgsrc = container.currentStyle || window.getComputedStyle(container, false);
      imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g,"");
      let img = new Image();

      img.src = imgsrc;
      img.onload= function(){
        let imgWidth = img.naturalWidth;
        let imgHeight = img.naturalHeight;
        let ratio = imgHeight/imgWidth;
        let percentage = ratio * 100 +'%'

        container.onmousemove = function(e){
          let boxWidth = container.clientWidth;
          let xPos = e.pageX - this.offsetLeft;
          let yPos = e.pageY - this.offsetTop;
          let xPercent = (xPos / (boxWidth / 100)) + (100 * index) + '%';
          let yPercent = yPos / (boxWidth * ratio / 100) + '%';

          Object.assign(container.style, {
            backgroundPosition: xPercent + ' ' + yPercent,
            backgroundSize: imgWidth + 'px'
          });
        };
      };
      container.onmouseleave = function(e) {
        Object.assign(container.style, {
          backgroundPosition: 'center',
          backgroundSize: '850px'
        });
      };
    }
  },[zoom])

  return (
    <Content id={`zoomImg${index}`} onClick={() => {setZoom(!zoom)}}/>
  )
}

export default Slide;

