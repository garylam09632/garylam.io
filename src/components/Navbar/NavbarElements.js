import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height: 100%;
    width: 100px;
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
        height: 100px;
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
    padding-left: 28px;
    background: linear-gradient(to right, #fff, #029fe8 68%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    cursor: pointer;
    height: 60px;
    width: 100px;
    display: flex;
    align-items: center;
    font: 900 italic 3rem "Teko"; 

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #fff;
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
        transform: translate(-100%, 50%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    width: 100%;
    height: 70%;
    padding: 380px 0px 0px 30px;
    display: block;
    align-items: center;
    list-style: none;
    margin-bottom: 22px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`;

export const NavItem = styled.li`
    height: 60px;
    // border-right: 5px solid aqua;
`;

export const NavLink = styled(LinkS)`
    color: #9C9B9A;
    display: block;
    align-items: center;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    font-size: 2.0rem;

    &:hover {
        color: #029fe8;
    }
`;