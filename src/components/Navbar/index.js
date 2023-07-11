import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineFolderOpen } from 'react-icons/ai'
import { RiSettingsLine } from 'react-icons/ri'
import { BiMailSend } from 'react-icons/bi'
import { BsPeople } from 'react-icons/bs';
import { 
    Nav, 
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink
} from './NavbarElements'

const Navbar = ( {toggle} ) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={ toggleHome }>GL</NavLogo>
                    <MobileIcon onClick={ toggle }>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="home-container" title="Home" smooth={true} duration={350} spy={true}>
                                <AiOutlineHome />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="about-container" title="About" smooth={true} duration={350} spy={true}>
                                <BsPerson />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="skill-container" title="Skills" smooth={true} duration={350} spy={true}>
                                <RiSettingsLine />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="project-container" title="Projects" smooth={true} duration={350} spy={true}>
                                <AiOutlineFolderOpen />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="working-experience-container" title="Projects" smooth={true} duration={350} spy={true}>
                                <BsPeople />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contact-container" title="Contact" smooth={true} duration={350} spy={true}>
                                <BiMailSend />
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>           
        </>
    )
}
export default Navbar