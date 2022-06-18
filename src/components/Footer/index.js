import React, { Component } from 'react'
import logo from '../../logo.svg'
import { GrInstagram, GrFacebook, GrMail, GrGithub } from 'react-icons/gr'
import { SiWechat } from 'react-icons/si'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import {
    FooterContainer,
    ContentContainer,
    CopyrightContent,
    FrameworkLogo,
    FrameworkText,
    SocialLink,
} from './FooterElements'
import QRCode from '../../images/wechat_qrcode.png'

class Footer extends Component {

    constructor() {
        super()
        this.state = {
            year: new Date().getFullYear()
        }
    }

    render() {
        return(
            <FooterContainer>
                <Container fluid id="footer-container">
                    <Row style={{height: 100 + '%'}}>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <ContentContainer>
                                <CopyrightContent>&copy;{ this.state.year } Gary Lam</CopyrightContent>
                            </ContentContainer>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <ContentContainer>
                                <FrameworkText>This website is built by</FrameworkText>
                                <FrameworkLogo src={ logo } id="react-logo" alt="React Logo" />
                            </ContentContainer>
                        </Col>
                        <Col id="social-links-col" xs={3} sm={3} md={3} lg={3}>
                            <ContentContainer>
                                <SocialLink href="https://www.facebook.com/profile.php?id=100000561124616" 
                                            target="_blank" id="facebook-icon">
                                    <GrFacebook />
                                </SocialLink>
                                <SocialLink href="https://www.instagram.com/ww_gary_ww/" 
                                            target="_blank" id="instagram-icon">
                                    <GrInstagram />
                                </SocialLink>
                                <SocialLink href={ process.env.PUBLIC_URL + '/images/wechat_qrcode.png' }
                                            target="_blank" id="wechat-icon">
                                    <SiWechat />
                                </SocialLink>
                                <SocialLink href="mailto:garylamofficial@gmail.com" title="mailto:garylamofficial@gmail.com" target="_blank" id="mail-icon">
                                    <GrMail />
                                </SocialLink>
                                <SocialLink href="https://github.com/garylam09632" target="_blank" id="github-icon">
                                    <GrGithub />
                                </SocialLink>
                            </ContentContainer>
                        </Col>
                    </Row>
                </Container>
            </FooterContainer>
        )
    }

}

export default Footer