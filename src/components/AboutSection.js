import React from 'react';
import home1 from '../img/home1.png';
import {StyledAbout, StyledDescription, StyledHide, StyledImage} from '../styles'
//styles
import styled from 'styled-components';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2> We Work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true.</h2>
                    </StyledHide>
                </div>
                <p>
                    Contact us for any Photography or videography ideas that you have. We have
                    professionals with amazing skills to help you achieve it.
                </p>
                <button> Contact Us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="guy with a camera" />
            </StyledImage>
        </StyledAbout>
    )
}

export default AboutSection;