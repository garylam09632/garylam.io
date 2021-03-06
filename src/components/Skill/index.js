import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import { Chart } from 'react-chartjs-2'
import { 
    SkillTitle,
    SkillContent,
    ChartContainer,
    Span,
    PS,
    LegendsContainer,
    Legends,
    Legend,
    ColorBlock,
    DotTitle
} from './SkillElements'
import SkillChart from './SkillChart'
import { dotsData } from './Data'
import { defaultConfigs, chartConfigs } from './ChartConfigs' 

class Skill extends Component {

    constructor() {
        super();
        this.state = {
            charData: {}
        }

        if (window.matchMedia("(max-width: 576px)").matches) {
            chartConfigs.axesFontSize = 14;
            chartConfigs.footerFontSize = 9;
            chartConfigs.radius = 6;
        }
    }

    componentDidMount() {
        // Get the elements that need to resize by media queries
        // bigSlogan is also for adding the typing animation
        var chartCol = document.getElementById('chart-col')
        var skillText = document.getElementById('skills')
        var varySpan = document.getElementById('vary-span')
        var chartContainer = document.getElementById('chart-container')
        var skillFlexContainer = document.getElementById('skill-flex-chart-container')

        if (window.matchMedia("(max-width: 768px)").matches) {
            chartCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
            skillText.className = "col-xs-10 col-sm-10 col-md-10 col-lg-10"
        }
        if (window.matchMedia("(max-width: 1500px)").matches) {
            chartCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
            skillText.className = "col-xs-10 col-sm-10 col-md-10 col-lg-10"

            varySpan.innerText = "below"
            chartContainer.style.display = "none"
            skillFlexContainer.style.display = "block"
        }
        else if (window.matchMedia("(min-width: 1500px)").matches) {
            chartCol.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6"
            skillText.className = "col-xs-5 col-sm-5 col-md-5 col-lg-5"

            varySpan.innerText = "on the right"
            chartContainer.style.display = "block"
            skillFlexContainer.style.display = "none"
        }

        // Defined the functions to resize
        const handleMaxWidth = function(e) {
            if (e.matches) {
                chartCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
                skillText.className = "col-xs-10 col-sm-10 col-md-10 col-lg-10"
            }
        }
        const handleMaxWidth1500 = function(e) {
            if (e.matches) {
                chartCol.className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
                skillText.className = "col-xs-10 col-sm-10 col-md-10 col-lg-10"

                varySpan.innerText = "below"
                chartContainer.style.display = "none"
                skillFlexContainer.style.display = "block"
            }
        }
        const handleMinWidth1500 = function(e) {
            if (e.matches) {
                chartCol.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6"
                skillText.className = "col-xs-5 col-sm-5 col-md-5 col-lg-5"

                varySpan.innerText = "on the right"
                chartContainer.style.display = "block"
                skillFlexContainer.style.display = "none"
            }
        }
        const handleMaxWidth576 = function(e) {
            if (e.matches) {
                var chart = new Chart(document.getElementById("skill-chart").getContext("2d"))
                chart.options.tooltips.footerFontSize = 5
                chart.data.datasets.radius = 3
                chart.update()
            }
        }
        
        window.matchMedia("(max-width: 768px)").addListener(handleMaxWidth);
        window.matchMedia("(max-width: 1200px)").addListener(handleMaxWidth);
        window.matchMedia("(max-width: 1500px)").addListener(handleMaxWidth1500);
        window.matchMedia("(min-width: 1500px)").addListener(handleMinWidth1500);
        window.matchMedia("(max-width: 576px)").addListener(handleMaxWidth576);
    }

    toDefaultChartConfig() {
        chartConfigs.axesFontSize = defaultConfigs.axesFontSize
        chartConfigs.bodyFontSize = defaultConfigs.bodyFontSize
        chartConfigs.footerFontSize = defaultConfigs.footerFontSize
        chartConfigs.footerSpacing = defaultConfigs.footerSpacing
        chartConfigs.footerMarginTop = defaultConfigs.footerMarginTop
        chartConfigs.radius = defaultConfigs.radius
    }

    render() {

        const legend = dotsData.map((dot) => 
            <Legend key={dot.title}>
                <ColorBlock color={ dot.color } />
                <DotTitle>{ dot.title }</DotTitle>
            </Legend>
        );
        
        return (
            <>
                <Container fluid id="skill-container" className="containers">
                    <Row>
                        <Col xs={1} sm={1} md={1} lg={1}></Col>
                        <Col xs={5} sm={5} md={5} lg={5} id="skills">
                            <SkillTitle>Skills</SkillTitle>
                            <SkillContent>
                                The main area I feel condfident in is front-end development. 
                                <br />
                                Building web apps by HTML, CSS, JS (React.js) with interactive layouts and animations.
                                <br />
                                Please hover the dots within the graph <Span id="vary-span">on the right</Span> to know more about my skills againsting the two aspects.  
                            </SkillContent>
                            <PS>* The higher the point is plotted into the graph, the quicker I can get use to it, develop my knowledge on it </PS>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} id="chart-col">
                            <ChartContainer id="chart-container">
                                <LegendsContainer>
                                    <Legends>{ legend }</Legends>
                                </LegendsContainer>
                                <SkillChart />
                            </ChartContainer>
                        </Col>
                    </Row>
                </Container>
                <Container fluid id="skill-flex-chart-container" style={{display: "none"}} className="containers">
                    <Row>
                        <Col>
                            <ChartContainer>
                                <LegendsContainer>
                                    <Legends>{ legend }</Legends>
                                </LegendsContainer>
                                <SkillChart />
                            </ChartContainer>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

}

export default Skill
