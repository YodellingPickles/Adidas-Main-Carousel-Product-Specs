import React, { useState } from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components';

const Modal = ({ isOpen, onClose, item }) => {
  if(!isOpen) return null
  const [hoverDetail, setHoverDetail] = useState(false)
  const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1000;
  `;
  const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    z-index: 1000;
    border: 1.7px solid black;
  `;

  const ModalDescription = styled.div`
    background-color: #FFF;
    font-family: AdihausDIN;
    margin: 15px 20px 15px 20px;
    font-size: 12px;
  `;

  const Sizing = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  `;

  const SizingHeader = styled.div`
    width:100%;
    font-family: AdihausDIN Cn;
    margin-bottom: 20px;
    font-size: 16px;
    letter-spacing: .04rem;
  `;

  const AddToBagButton = styled.div`
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    background-color: black;
    color: white;
    margin-top: 28px;
    margin-bottom: 28px;
    font-family: AdihausDIN Cn;
    font-size: 14px;
    letter-spacing: 2px;
  `;
  
  const Test = styled.div`
    position: relative;
  `

  const Exit = styled.div`
    width: 7%;
    height: 20px;
    position: absolute;
    right: 5%;
    top: 2%;
    cursor: pointer;
    border: 1.5px solid black;
    display:flex;
    justify-content: center;
    align-items: center;
  `

  return ReactDom.createPortal(
    <>
      <Overlay>
        <Modal>
          <Exit onClick={onClose}>&#x2715;</Exit>
          <img src={item.url}></img>
          <ModalDescription>
            <div style={{'margin-bottom': '5px'}}>{item.name}</div>
            <div>{item.price}</div>
            <MoreDetails />
            <Sizing>
              <SizingHeader>Select size</SizingHeader>
              {item.size.split(',').map(size => <SizingButtons size={size}/>)}
            </Sizing>
            <AddToBagButton>
              <div style={{'margin-left': '15px'}}>ADD TO BAG</div>
              <div style={{'width': '30px'}}>&#8594;</div>
            </AddToBagButton>
          </ModalDescription>
        </Modal>
      </Overlay>
    </>,
    document.getElementById('portal')
  )
}

const SizingButtons = ({ size }) => {
  const [isHovered, setHover] = useState(false);
  const [isClicked, setClick] = useState(false);
  const SizeButtons = styled.div`
    width: 32.6%;
    height: 2.5rem;
    border: 1px solid rgb(238,240,241);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: ${isHovered || isClicked ? 'white' : 'black'};
    background-color: ${isHovered || isClicked ? 'black' : 'white'};
  `
  return (
    <SizeButtons onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={()=>setClick(!isClicked)}>
      {size}
    </SizeButtons>
  )
}

const MoreDetails = () => {
  const [hoverDetail, setHoverDetail] = useState(false)
  const MoreDetails = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    width:33%;
    text-decoration: underline;
    font-weight: bolder;
    font-family: AdihausDIN Cn;
    font-size: 14px;
    letter-spacing: 2px;
    background-color: ${hoverDetail ? 'black' : 'white'};
    color: ${hoverDetail ? 'white' : 'black'};
  `;
  return (
    <MoreDetails onMouseEnter={()=>setHoverDetail(true)} onMouseLeave={()=>setHoverDetail(false)}>
      MORE DETAILS
    </MoreDetails>
  )
}

export default Modal

