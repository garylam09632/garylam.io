import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height: 100%;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    z-index: 10;
    margin: 0px;

    @media screen and (max-width: 768px) {
        transition: 0.1s all ease;
        height: 80px;
        width: 100%;
    }
`;

export const NavbarContainer = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 20px;
    z-index: 1;

    @media screen and (max-width: 768px) {
        display: flex;
    }
`;

export const NavLogo = styled(LinkR)`
    padding-left: 22px;
    background: linear-gradient(to right, #fff, #029fe8 68%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    cursor: pointer;
    height: 40px;
    width: 80px;
    display: flex;
    align-items: center;
    font: 900 italic 2.4rem "Teko"; 

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        padding-left: 22px;
    }
`;

// Icons
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        color: #029fe8;
        display: flex;
        position: absolute;
        right: 0;
        transform: translate(-100%, 23%);
        font-size: 1.6rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    width: 100%;
    height: 70%;
    padding: 29vh 1px 0px 23px;
    display: block;
    align-items: center;
    list-style: none;
    margin-bottom: 22px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`;

export const NavItem = styled.li`
    height: 50px;
    // border-right: 5px solid aqua;
`;

export const NavLink = styled(LinkS)`
    color: #9C9B9A;
    display: block;
    align-items: center;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.67rem;
    box-sizing: border-box;

    &:hover {
        color: #029fe8;
    }
`;