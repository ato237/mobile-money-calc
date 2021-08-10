import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars,FaTimes } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #000;
    position:sticky;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem cal((100vw - 1000px)/2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    height: 100%;
    cursor: pointer;
    font-size:22px;

    &.active {
        color: #15cefc;
    }
`

export const Bars = styled(FaBars)`
    display:none;
    color:#fff;

    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top: 25px;
        right: 10px;
        transform: translate(-200, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const Times = styled(FaTimes)`
    display:none;
    color:#fff;

    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top: 25px;
        right: 10px;
        transform: translate(-200, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
 display: flex;
 align-items: center;
 margin-right: -24px;

 @media screen and (max-width: 768px) {
     display: none;
 }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 14px;
    background: blue;
    padding: 10px 22px;
    color: #fff;
    border:none;
    outline:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`