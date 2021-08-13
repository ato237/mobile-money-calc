import React,{useState,useEffect} from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
const Navbar = ({ toggle }) => {
  
  /*const [scrollNav, setScrollNav] = useState(false)
  
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    }
    else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  }, [])*/
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">ATO</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="">Calculate charges</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>

          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Do Something</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
