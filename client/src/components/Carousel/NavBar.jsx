import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const NavBar = (props) => {
  const [activeNav, setActiveNav] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return function cleanup() {
      console.log('clean-up!')
      window.removeEventListener('scroll', onScroll)
    };
  })

  const onScroll = (e) => {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
      });
    });
    console.log(document.getElementById("highlights").getBoundingClientRect())
    if (document.getElementById("completeLook").getBoundingClientRect().top < 0) {
      setActiveNav(5)
    } else if (document.getElementById("details").getBoundingClientRect().top < 0) {
      setActiveNav(3)
    } else if (document.getElementById("description").getBoundingClientRect().top < 0) {
      setActiveNav(2)
    } else if (document.getElementById("highlights").getBoundingClientRect().top < 0) {
      setActiveNav(1)
    } else if (document.getElementById("gallery").getBoundingClientRect().top < 0) {
      setActiveNav(0)
    }
  }

  const NavBarCSS = styled.div`
    border-top: 2px solid rgb(238,240,241);
    border-bottom: 2px solid rgb(238,240,241);
    display: flex;
    justify-content: center;
    background-color: white;
    z-index: 10;
  `
  const changeActiveNav = (index) => {
    setActiveNav(index)
  }
  const navSections = ['GALLERY', 'HIGHLIGHTS', 'DESCRIPTION', 'DETAILS', 'STORY', 'COMPLETE THE LOOK', 'REVIEWS']

  const link = ['#gallery', '#highlights', '#description', '#details', '#story', '#completeLook', '#reviews']

  return (
    <NavBarCSS id='navbar'>
      {navSections.map((sections, index) => (
        <NavBarItem sections={sections} index={index} isActive={activeNav === index} link={link[index]} changeActiveNav={changeActiveNav}/>
      ))}
    </NavBarCSS>
  )
}

const NavBarItem = ({ sections, index, isActive, link, changeActiveNav}) => {
  const NavBarItemCSS = styled.span`
    padding: 20px 12px 20px 12px;
    letter-spacing: 2px;
    border-bottom: ${isActive? '2px solid black' : 'none'};
    font-family: ${isActive? 'AdihausDIN Cn' : 'Adidas'};
  `

  return (
    <NavBarItemCSS onClick={()=>changeActiveNav(index)}>
      <a href={link}>
      {sections}
      </a>
    </NavBarItemCSS>
  )
}

export default NavBar