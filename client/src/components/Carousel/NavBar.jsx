import React from 'react'
import styled from 'styled-components';

const NavBar = (props) => {
  const NavBarCSS = styled.div`
    border-top: 2px solid rgb(238,240,241);
    border-bottom: 2px solid rgb(238,240,241);
    display: flex;
    justify-content: center;
  `
  const navSections = ['GALLERY', 'HIGHLIGHTS', 'DESCRIPTION', 'DETAILS', 'STORY', 'COMPLETE THE LOOK', 'REVIEWS']

  return (
    <NavBarCSS>
      {navSections.map((sections, index) => (
        <NavBarItem sections={sections} index={index} isActive={index === 0}/>
      ))}
    </NavBarCSS>
  )
}

const NavBarItem = ({ sections, index, isActive }) => {

  const NavBarItemCSS = styled.div`
    padding: 20px 12px 20px 12px;
    letter-spacing: 2px;
    border-bottom: ${isActive? '2px solid black' : 'none'};
    font-family: ${isActive? 'AdihausDIN Cn' : 'Adidas'};
  `
  return (
    <NavBarItemCSS>
      {sections}
    </NavBarItemCSS>
  )
}

export default NavBar