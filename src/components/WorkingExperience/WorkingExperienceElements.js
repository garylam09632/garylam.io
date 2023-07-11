import styled from 'styled-components'

export const WorkingExperienceContainer = styled.div`
    width: 100%;
    position: relative;
    display: none;
`
export const WorkingExperienceTitle = styled.div`
    padding-top: 150px;
    margin-bottom: 10px;
    color: #029fe8;
    font-size: 4.0rem;
    font-weight: bold;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 1540px) {
        padding-top: 80px;
        font-size: 3.3rem;
    }

    @media screen and (max-width: 576px) {
        padding-top: 50px;
        margin-bottom: 0px;
        font-size: 2.8rem;
    }
`;

export const WorkingExperienceSmallTitle = styled.div`
    padding-top: 40px;
    padding-bottom: 8px;
    font: bold italic 2.2rem 'Open Sans', sans-serif;
    color: #fff;
    display: block;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 855px) {
        font-size: 1.7rem;
    }

    @media screen and (max-width: 576px) {
        font-size: 1.4rem;
        padding-top: 25px;
        padding-bottom: 0px;
    }
`

export const WorkingExperienceContentWrapper = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    
`

export const WorkingExperienceContentContainer = styled.div`
    width: 48%;
    display: block;

    @media screen and (max-width: 1540px) {
        width: 100%;
        margin-bottom: 20px;
    }
`

export const WorkingExperienceContentSubTitle = styled.div`
    padding-top: 20px;
    padding-bottom: 8px;
    font: bold italic 1.7rem 'Open Sans', sans-serif;
    color: #fff;
    display: block;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 855px) {
        font-size: 1.4rem;
    }

    @media screen and (max-width: 576px) {
        font-size: 1.0rem;
        padding-top: 25px;
        padding-bottom: 0px;
    }
`

export const WorkingExperienceContent = styled.div`
    padding-top: 10px;
    font: 1.2rem 'Open Sans', sans-serif;
    color: #fff;
    display: inline;
    float: left;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 1540px) {
        width: 100%;
        display: block;
    }

    @media screen and (max-width: 855px) {
        font-size: 1.0rem;
    }

    @media screen and (max-width: 576px) {
        font-size: 0.9rem;
    }

`;

export const Point = styled.div`
    width: 7%;
    height: auto;
    padding: 2% 3% 2% 3%;
`

export const PointArea = styled.div`
    height: 4px;
    border-radius: 5px; 
    background-color: #029fe8;
`

export const PointText = styled.span`
    width: 90%;
    font: 1.2rem 'Open Sans', sans-serif;
    color: #fff;

    @media screen and (max-width: 1540px) {
        width: 100%;
    }

    @media screen and (max-width: 855px) {
        font-size: 1.0rem;
    }

    @media screen and (max-width: 576px) {
        font-size: 0.9rem;
    }
`

export const BulletPoints = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    height: 3.7vh;
`

export const ArrayBarContainer = styled.div`
    width: 50%;
    height: 30px;
    display: block;
`

export const SquareBracket = styled.div`
    color: #b6b3b3;
    font-size: 2rem;
    display: inline;
    margin: ${ props => {
        if (props.isLeftBracket) { return '0px 20px 0px 0px' }
        else { return '0px 0px 0px 20px' }
    }};
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 576px) {
        font-size: 1.5rem;
    }
`

export const ArrayIndex = styled.a`
    color: #b6b3b3;
    font-size: 2rem;
    display: inline;
    border-radius: 5px;
    padding: 0px 10px 3px 10px;
    cursor: pointer;
    box-sizing: content-box;
    transition: 0.3s ease-in-out;

    &:hover {
        text-decoration: none;
        background-color: #029fe8; 
        transition: 0.1s ease-in-out;
    }

    @media screen and (max-width: 576px) {
        font-size: 1.5rem;
    }

`
export const Comma = styled.span`
    color: #b6b3b3;
    font-size: 2rem;
    padding-right: 10px;
    padding-left: 10px;
    cursor: default;
    transition: 0.3s ease-in-out;
`

export const ProjectVideoContainer = styled.div`
    display: inline-block;
    padding-left: 140px;
    width: 60%;
    height: 50%;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 1640px) {
        padding-left: 130px;
    }

    @media screen and (max-width: 1540px) {
        display: block;
        padding-left: 0px;
    }

    @media screen and (max-width: 1000px) {
        width: 90%;
        height: 80%;
    }

`

export const ProjectVideoBg = styled.video`
    -o-object-fit: cover;
    object-fit: cover;
    background: #fff;
    transform: translateY(-75px);
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 1540px) {
        transform: translateY(30px);
    }

`