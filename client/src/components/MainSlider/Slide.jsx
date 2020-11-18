import React, { useState } from 'react'
import styled from 'styled-components';

const Slide = (props) => {
  let [zoom, setZoom] = useState(false)

  const Content = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('${props.image.url}');
    background-size: 1050px;
    background-repeat: no-repeat;
    background-position: center;
    transform: ${zoom ? 'scale(1.5)' : 'scale(1)'};
  `

  const clickZoom = () => {
    setZoom(!zoom)
  }

  return (
    <Content onClick={clickZoom}>
    </Content>
  )
}


export default Slide