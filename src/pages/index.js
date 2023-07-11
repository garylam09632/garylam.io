import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'
import About from '../components/About'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WorkingExperience from '../components/WorkingExperience'
import { ContentContainer, BlankArea } from './MasterElements'
import { Container } from 'react-bootstrap'

const Master = () => {

    // State
    const [isOpen, setIsOpen] = useState(false)

    // Function
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ContentContainer>
                <Home />
                <About />
                <Skill />
                <Project />
                <WorkingExperience />
                <Contact />
                <BlankArea height={"150px"}><Container fluid /></BlankArea>
                <Footer />
            </ContentContainer>
        </>
    )
}

export default Master