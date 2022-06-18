import React, { Component } from 'react';
import '../../css/Home.css'
import Typing from 'react-typing-animation'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import { 
    HomeContent,
    SpecialLetter,
    Slogan,
    BigSlogan,
    Description,
} from './HomeElements'
import Button from '../Button'

class Home extends Component {

    componentDidMount() {

        // Get the elements that need to resize by media queries
        // bigSlogan is also for adding the typing animation
        var bigSloganCol = document.getElementById('big-slogan-col')
        var mainText = document.getElementById('home')

        // Defined the functions to resize
        const handleMinWidth = function(e) {
            if (e.matches) {
                bigSloganCol.className = "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                mainText.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6"
            }
        }
        const handleMaxWidth = function(e) {
            if (e.matches) {
                bigSloganCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
                mainText.className = "col-xs-10 col-sm-10 col-md-10 col-lg-10"
            }
        }
        if (window.matchMedia("(max-width: 768px)").matches) {
            bigSloganCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
            mainText.className = "col-xs-10 col-sm-10 col-md-10 col-lg-10"
        }
        else if (window.matchMedia("(min-width: 1200px)")) {
            bigSloganCol.className = "col-xs-4 col-sm-4 col-md-4 col-lg-4"
            mainText.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6"
        }

        window.matchMedia("(min-width: 1200px)").addListener(handleMinWidth);
        window.matchMedia("(max-width: 768px)").addListener(handleMaxWidth);
        window.matchMedia("(max-width: 1050px)").addListener(handleMaxWidth);
    }

    render() {
        return (
            <Container fluid id="home-container" className="containers">
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1}></Col>
                    <Col xs={6} sm={6} md={6} lg={6} id="home">
                        <Slogan>System.out.println(mySlogan);</Slogan>
                        <HomeContent>Hello World,</HomeContent>
                        <HomeContent>
                            I'm <SpecialLetter>G</SpecialLetter>ary <SpecialLetter>L</SpecialLetter>am
                        </HomeContent>
                        <Description>// Graduated software developer, passion in learning & coding</Description>
                        <Button to="contact-container" text={"contact"} padding={"23px 160px"} offset={-80}
                            smooth={true} duration={500} spy={true}/>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} id="big-slogan-col">
                        <Typing speed={0} cursorClassName="text-white">
                            <Typing.Delay ms={1000} />
                            <BigSlogan>"BE HUMBLE, BE HUNGRY."</BigSlogan>
                        </Typing>
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={1}></Col>
                </Row>
            </Container>
        )
    }
}

export default Home
