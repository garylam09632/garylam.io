import styled, { keyframes } from 'styled-components'

// Animations
const letterFloatIn = keyframes`
    0% {
        display: none;
        transform: translate(-500px)
    }
    50% {
        display: inline-block;
        transform: translate(40px) rotate(10deg);
        transition: 0.8s ease-in-out;
    }
`

export const HomeContent = styled.div`
    height: 70px;
    color: #fff;
    font-size: 4rem;
    font-weight: bold;

    @media screen and (max-width: 1200px) {
        height: 60px;
        font-size: 3.5rem;
    }

    @media screen and (max-width: 576px) {
        font-size: 3.3rem;
    }
`;

export const Slogan = styled.div`
    color: #9C9B9A;
    font: 500 1.2rem "Consolas";
    padding: 185px 0px 140px 0px;

    @media screen and (max-width: 1200px) {
        height: 50px;
        padding-top: 210px;
        font-size: 1.1rem;
    }

    @media screen and (max-width: 768px) {
        padding-top: 210px;
    }

    @media screen and (max-width: 576px) {
        padding-top: 150px;
        padding-bottom: 100px;
    }
`;

export const BigSlogan = styled.div`
    transform: translateX(-100px);
    padding-top: 90px; 
    color: #029fe8;
    font-size: 8rem;
    font-style: italic;
    font-weight: bold;

    @media screen and (max-width: 1800px) {
        transform: translateX(-20px);
        padding-top: 180px;
        font-size: 6rem;
    }

    @media screen and (max-width: 1500px) {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

export const Description = styled.div`
    padding-top: 70px;
    padding-bottom: 30px;
    color: #9C9B9A;
    font: bold italic 1.2rem "Consolas";

    @media screen and (max-width: 1200px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 576px) {
        padding-top: 50px;
        font-size: 1rem;
    }
`;

export const SpecialLetter = styled.span`
    display: inline-block;
    padding-right: 12px;
    font: 900 italic 7rem "Teko";
    color: #029fe8;
    animation-name: ${letterFloatIn};
    animation-duration: 1s;

    @media screen and (max-width: 768px) {
        font-size: 6.5rem;
    }

    @media screen and (max-width: 576px) {
        font-size: 5.7rem;
    }
`;