import React from 'react';
//import image
import home2 from '../img/home2.png';
//import pages
import AboutUs from '../pages/AboutUs';
//import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
//import styled components
import styled from 'styled-components';
//import styled components
import {StyledAbout, StyledDescription, StyledImage} from '../styles';

const ServicesSection = () => {
    return (
        <StyledServices>
            <StyledDescription>
                <h2>High <span>quality</span> services</h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                        </p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                        </p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                        </p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                        </p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
                <div>
                    <img src={home2} alt="second home"/>
                </div>
        </StyledServices>
    );
};

const StyledServices = styled(StyledAbout)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const StyledCard = styled.div`
    flex-basis : 20rem;
    .icon{
        display: flex;
        align-items: center;
    }
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
`;
export default ServicesSection;