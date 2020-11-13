import React from 'react';

const MainCarousel = ({ mainDisplay }) => {
  console.log('asdfasdfasdfasdfas', mainDisplay)
  if (mainDisplay.length > 0) {
    return (
      <div>
        <img src={mainDisplay[0].url}></img>
      </div>
    )
  } else {
    return (
      <div>
        Loading.....
      </div>
    )
  }
}

export default MainCarousel