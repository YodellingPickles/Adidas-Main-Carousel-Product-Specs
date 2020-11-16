import React from 'react'
import styled from 'styled-components';

const Slide = (props) => {
  const Content = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('${props.image.url}');
    background-size: 1200px;
    background-repeat: no-repeat;
    background-position: center;
  `
  return (
    <Content>
    </Content>
  )
}


export default Slide