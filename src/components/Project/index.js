import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import {
    ProjectContainer,
    ProjectVideoContainer,
    ArrayBarContainer,
    SquareBracket,
    ArrayIndex,
    Comma,
    ProjectTitle,
    ProjectSmallTitle,
    ProjectContent,
    ProjectVideoBg
} from './ProjectElements.js'
import { projectData } from './Data'
import FBK from '../../videos/shirakami_fubuki.mp4'
import Lamy from '../../videos/lamy.mp4'

class Project extends Component {

    constructor() {
        super()
        this.state = {
            isLeftBracket: true,
            showingProjectIndex: 0,
        }
    }

    componentDidMount() {
        var arrayElements = document.getElementById('array-bar-container').getElementsByTagName('a')
        arrayElements[0].className += ' active-index';
        var projectContainers = document.getElementsByClassName('project-container')
        projectContainers[0].style.display = 'block'
    }

    render() {

        const indexOnClick = (e) => {
            let selectedIndex = parseInt(e.target.innerText) - 1
            // If selected the same element
            if (selectedIndex === this.state.showingProjectIndex) { return }

            var projectContainers = document.getElementsByClassName('project-container')
            var displayedElement = projectContainers[this.state.showingProjectIndex]
            var willShowElement = projectContainers[selectedIndex]
            displayedElement.animate([
                { opacity: 0 },
                { display: 'none' },
            ], {
                duration: 500
            })
            // Hide the displaying element
            displayedElement.style.display = 'none'
            // Show the selected element
            willShowElement.animate([
                { opacity: 0 },
                { opacity: 1 },
            ], {
                duration: 500
            })
            willShowElement.style.display = 'block'

            // Changed the selected index in the array
            var arrayElements = document.getElementById('array-bar-container').getElementsByTagName('a')
            var index = 0
            while (index < arrayElements.length) {
                if (arrayElements[index].classList.contains('active-index'))
                    arrayElements[index].classList.remove('active-index') 
                index++;
            }
            e.target.className += ' active-index'
            this.setState({ showingProjectIndex: selectedIndex })
        }

        const arrayIndex = projectData.map((project, index) => 
            {
                if (index !== projectData.length - 1) 
                    return <span key={project.title}>
                                <ArrayIndex onClick={indexOnClick}>{ index + 1 }</ArrayIndex>
                                <Comma>,</Comma>
                            </span>
                else if (index === 0) 
                    return <span key={project.title}>
                                <ArrayIndex onClick={indexOnClick}>{ index + 1 }</ArrayIndex>
                                <Comma>,</Comma>
                            </span>
                return <ArrayIndex key={project.title} onClick={indexOnClick}>{ index + 1 }</ArrayIndex>
            }
        )

        const projects = projectData.map((project) => 
            <ProjectContainer className="project-container" key={project.title}>
                <ProjectSmallTitle>{ project.title }</ProjectSmallTitle>
                <ProjectContent>{ project.description }</ProjectContent>
                <ProjectVideoContainer>
                    <ProjectVideoBg autoPlay loop muted src={ project.src } type="video/mp4" />
                </ProjectVideoContainer>
            </ProjectContainer>
        );

        return (
            <Container fluid id="project-container">
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1}></Col>
                    <Col xs={11} sm={11} md={11} lg={11} id="project-text">
                        <ProjectTitle>Project</ProjectTitle>
                        <ArrayBarContainer id="array-bar-container">
                            <SquareBracket isLeftBracket={this.state.isLeftBracket}>[</SquareBracket>
                            { arrayIndex }
                            <SquareBracket isLeftBracket={!this.state.isLeftBracket}>]</SquareBracket>
                        </ArrayBarContainer>
                        { projects }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Project