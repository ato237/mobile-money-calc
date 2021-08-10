import React, { useState } from 'react'
import {Nav, NavLink, Bars, NavMenu,NavBtn,NavBtnLink, Times} from './NavbarElements'
function Navbar() {

    const [clicked, setClicked] = useState(true);

    const handleClick =()=>{
        setClicked(!clicked);
    }
    
    return (
    <>
        <Nav>
            <NavLink to='/'>
                ATO
                </NavLink>
                <div>
                    { clicked?
                    <Bars onClick={handleClick}/>
                    : <Times onClick={handleClick}/>
                    }
                    {console.log(clicked)}
            </div>
         <NavMenu>
                <NavLink to='/about' activeStyle>
                About
            </NavLink>
            <NavLink to='/services' activeStyle>
                  Services
            </NavLink>
            <NavLink to='/contact-us' activeStyle>
                 Contact us
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
                Sign Up
            </NavLink>
        </NavMenu>
            <NavBtn>
                <NavBtnLink to='signin'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
    )
}

export default Navbar
