import React, { useState } from 'react'
import styled from 'styled-components';
import magnify from '../../../../img/magnifying.js'
import Modal from './Modal.jsx'

const Recommendations = ({ productRecs }) => {
  const RecSection = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  `
  return (
    <RecSection>
      {productRecs.map((item, index) => <RecommendationsItems item={item} index={index}/>)}
    </RecSection>
  )
}

const RecommendationsItems = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const RecItems = styled.div`
    width: 24%;
    height: 22vh;
    font-family: AdihausDIN;
    background-color: rgb(236,238,240);
    font-size: 12px;
    position: relative;
  `

  return (
    <RecItems>
      <img class='magnifyGlass' src={magnify} onClick={()=>setIsOpen(true)}></img>
      <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)} item={item}/>
      <img class={'recImg'} src={item.url}></img>
      <div class='recDesc'>
        <div style={{'margin-bottom': '5px'}}>{item.name}</div>
        <div>{item.price}</div>
      </div>
    </RecItems>
  )
}

export default Recommendations