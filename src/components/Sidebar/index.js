import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineFolderOpen } from 'react-icons/ai'
import { RiSettingsLine } from 'react-icons/ri'
import { BiMailSend } from 'react-icons/bi'
import { BsPeople } from 'react-icons/bs';
import { 
    SidebarContainer, 
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home-container" onClick={toggle} 
                        title="About" offset={-80} smooth={true} duration={350} spy={true}>
                        <AiOutlineHome className="icon"/>Home
                    </SidebarLink>
                    <SidebarLink to="about-container" onClick={toggle} 
                        title="About" offset={-80} smooth={true} duration={350} spy={true}>
                        <BsPerson className="icon"/>About
                    </SidebarLink>
                    <SidebarLink to="skill-container" onClick={toggle} 
                        title="About" offset={-80} smooth={true} duration={350} spy={true}>
                        <RiSettingsLine className="icon"/>Skills
                    </SidebarLink>
                    <SidebarLink to="project-container" onClick={toggle} 
                        title="About" offset={-80} smooth={true} duration={350} spy={true}>
                        <AiOutlineFolderOpen className="icon"/>Projects
                    </SidebarLink>
                    <SidebarLink to="working-experience-container" onClick={toggle} 
                        title="About" offset={-80} smooth={true} duration={350} spy={true}>
                        <BsPeople className="icon"/>Working Experience
                    </SidebarLink>
                    <SidebarLink to="contact-container" onClick={toggle} 
                        title="About" offset={-80} smooth={true} duration={350} spy={true}>
                        <BiMailSend className="icon"/>Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
