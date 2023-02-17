import React from 'react';
import home1 from '../img/home1.jpg';
import {StyledAbout, StyledDescription, StyledHide, StyledImage} from '../styles'
//import Framer Motion
import {motion} from 'framer-motion';
//import animation.js
import {titleAnim, fade, photoAnim} from '../animation';
//import wave
import Wave from './Wave';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>

                <motion.div className="title">

                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            We Work to make
                        </motion.h2>
                    </StyledHide>

                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </StyledHide>

                    <StyledHide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </StyledHide>

                </motion.div>

                <motion.p variants={fade}>
                    Hi! My name is Harsh Jha and Contact me for any webdevelopment project , i just started to learn react and my goal for 2023 is to focus on frontend development.
                </motion.p>

                <motion.button variants={fade}> Contact Us</motion.button>

            </StyledDescription>
            <StyledImage>

                <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
            </StyledImage>
            <Wave />
        </StyledAbout>
    )
}

export default AboutSection;