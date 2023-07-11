import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import {
    WorkingExperienceContainer,
    ArrayBarContainer,
    SquareBracket,
    ArrayIndex,
    Comma,
    WorkingExperienceTitle,
    WorkingExperienceSmallTitle,
    WorkingExperienceContent,
    WorkingExperienceContentWrapper,
    WorkingExperienceContentContainer,
    WorkingExperienceContentSubTitle,
    Point,
    PointArea,
    PointText,
    BulletPoints,
} from './WorkingExperienceElements.js'
import { projectData } from './Data.js'

class WorkingExperience extends Component {

    constructor() {
        super()
        this.state = {
            isLeftBracket: true,
            showingProjectIndex: 0,
        }
    }

    componentDidMount() {
        var arrayElements = document.getElementById('we-array-bar-container').getElementsByTagName('a')
        arrayElements[0].className += ' active-index';
        var projectContainers = document.getElementsByClassName('work-experiences')
        projectContainers[0].style.display = 'block'

        // Resize
        var emptyCol = document.getElementById('project-empty-col')
        var projectContentCol = document.getElementById('work-experiences')
        
        if (window.matchMedia("(max-width: 576px)").matches) {
            emptyCol.className = ""
            projectContentCol.className = "col"
        } 
        else if (window.matchMedia("(min-width: 576px)").matches) {
            emptyCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
            projectContentCol.className = "col-xs-11 col-sm-11 col-md-11 col-lg-11"
        }

        const handleMaxWidth = function(e) {
            if (e.matches) {
                emptyCol.className = ""
                projectContentCol.className = "col"
            }
        }

        const handleMinWidth = function(e) {
            if (e.matches) {
                emptyCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
                projectContentCol.className = "col-xs-11 col-sm-11 col-md-11 col-lg-11"
            }
        }

        window.matchMedia("(max-width: 576px)").addListener(handleMaxWidth);
        window.matchMedia("(min-width: 576px)").addListener(handleMinWidth);

    }

    render() {

        const indexOnClick = (e) => {
            let selectedIndex = parseInt(e.target.innerText) - 1
            // If selected the same element
            if (selectedIndex === this.state.showingProjectIndex) { return }

            var projectContainers = document.getElementsByClassName('work-experiences')
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
            var arrayElements = document.getElementById('we-array-bar-container').getElementsByTagName('a')
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
                return <ArrayIndex key={project.title} onClick={indexOnClick}>{ index + 1 }</ArrayIndex>
            }
        )

        const projects = projectData.map((project) => 
            <WorkingExperienceContainer className="work-experiences" key={project.title}>
                <WorkingExperienceSmallTitle>{ project.title }</WorkingExperienceSmallTitle>
                <WorkingExperienceContentWrapper>
                    <WorkingExperienceContentContainer>
                        <WorkingExperienceContentSubTitle>About</WorkingExperienceContentSubTitle>
                        <WorkingExperienceContent>{ project.about }</WorkingExperienceContent>
                    </WorkingExperienceContentContainer>
                    <WorkingExperienceContentContainer>
                        <WorkingExperienceContentSubTitle>Role</WorkingExperienceContentSubTitle>
                        {
                            project.roles.map((role) => (
                                <BulletPoints>
                                    <Point>
                                        <PointArea />
                                    </Point>
                                    <PointText>{ role }</PointText>
                                </BulletPoints>
                            ))
                        }
                    </WorkingExperienceContentContainer>
                </WorkingExperienceContentWrapper>
            </WorkingExperienceContainer>
        );

        return (
            <Container fluid id="working-experience-container" className="containers">
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1} id="project-empty-col"></Col>
                    <Col xs={11} sm={11} md={11} lg={11} id="work-experiences">
                        <WorkingExperienceTitle>Working Experiences</WorkingExperienceTitle>
                        <ArrayBarContainer id="we-array-bar-container">
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

export default WorkingExperience
