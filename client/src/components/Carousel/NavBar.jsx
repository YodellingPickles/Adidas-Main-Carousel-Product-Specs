import React, { useState, useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components';

const NavBar = (props) => {
  const [activeNav, setActiveNav] = useState(0);
  const [isSticky, setSticky] = useState(false);
  const stickyRef = useRef(false)

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return function cleanup() {
      window.removeEventListener('scroll', () => onScroll);
    };
  }, []);

  const onScroll = useMemo(() => {
    return (e) => {
      if (stickyRef.current) {
        setSticky(stickyRef.current.getBoundingClientRect().top <= 0);
      }

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
        });
      });

      if (document.getElementById("completeLook").getBoundingClientRect().top + window.pageYOffset - 200 < window.pageYOffset) {
        setActiveNav(5);
      } else if (document.getElementById("details").getBoundingClientRect().top + window.pageYOffset - 200 < window.pageYOffset) {
        setActiveNav(3);
      } else if (document.getElementById("description").getBoundingClientRect().top + window.pageYOffset - 200 < window.pageYOffset) {
        setActiveNav(2);
      } else if (document.getElementById("highlights").getBoundingClientRect().top + window.pageYOffset - 200 < window.pageYOffset) {
        setActiveNav(1);
      } else if (document.getElementById("gallery").getBoundingClientRect().top + window.pageYOffset - 200 < window.pageYOffset) {
        setActiveNav(0);
      }
    }
  },[activeNav])

  const NavBarCSS = styled.div`
    border-top: 2px solid rgb(238,240,241);
    border-bottom: 2px solid rgb(238,240,241);
    display: flex;
    justify-content: center;
    background-color: white;
  `;

  const Sticky = styled.div`
    position: sticky;
    align-self: flex-start;
    top: 0;
    width: 100%;
    z-index: 10;
  `;

  const NonSticky = styled.div`
  `;

  const changeActiveNav = (index) => {
    setActiveNav(index)
  };

  const navSections = ['GALLERY', 'HIGHLIGHTS', 'DESCRIPTION', 'DETAILS', 'STORY', 'COMPLETE THE LOOK', 'REVIEWS'];

  const link = ['#gallery', '#highlights', '#description', '#details', '#details', '#completeLook', '#reviews'];

  const MySticky = isSticky ? Sticky : NonSticky

  return (
    <div ref={stickyRef} className={isSticky ? 'sticky' : ''}>
    <NavBarCSS id='navbar'>
      {navSections.map((sections, index) => (
        <NavBarItem sections={sections} index={index} isActive={activeNav === index} link={link[index]} changeActiveNav={changeActiveNav}/>
      ))}
    </NavBarCSS>
    </div>
  )
}

const NavBarItem = ({ sections, index, isActive, link, changeActiveNav}) => {
  const NavBarItemCSS = styled.span`
    padding: 20px 12px 20px 12px;
    border-bottom: ${isActive? '2px solid black' : 'none'};
    font-family: ${isActive? 'AdihausDIN Cn' : 'AdihausDIN'};
    font-size: ${isActive? '19px' : '16px'}
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