import React from 'react';
import styled from 'styled-components';


// const MainCarousel = ({ mainDisplay }) => {
//   console.log('asdfasdfasdfasdfas', mainDisplay)
//   if (mainDisplay.length > 0) {
//     return (
//       <div>
//         <img src={mainDisplay[0].url}></img>
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         Loading.....
//       </div>
//     )
//   }
// }

const SliderContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 90%;
  width: ${props => props.width}px;
  display: flex;
`

export default SliderContent