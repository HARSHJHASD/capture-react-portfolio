import React from 'react';
//import images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//import styled components
import styled from 'styled-components';
//import link
import {Link} from 'react-router-dom';
//import Framer Motion
import {motion} from 'framer-motion';
//animation.js
import {pageAnimation, slider, sliderContainer, fade, photoAnim, lineAnim} from '../animation';
import {useScroll} from '../components/useScroll';
//import ScrollTop
import ScrollTop from '../components/scrollTop';
const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <StyledWork
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{background: '#fff'}}
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}> </Frame1>
                <Frame2 variants={slider}> </Frame2>
                <Frame3 variants={slider}> </Frame3>
                <Frame4 variants={slider}> </Frame4>
            </motion.div>

            <StyledMovie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                    </Hide>
                </Link>
            </StyledMovie>

            <StyledMovie variants={fade} ref={element} animate={controls} initial="hidden">
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <motion.img variants={photoAnim} src={theracer} alt="theracer" />
                </Link>
            </StyledMovie>

            <StyledMovie variants={fade} ref={element2} animate={controls2} initial="hidden">
                <motion.h2>Good Times</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes" />
                </Link>
            </StyledMovie>
            
            <ScrollTop />
        </StyledWork>
    );
};

const StyledWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`;

const StyledMovie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const Hide = styled.div`
    overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0;
`;
export default OurWork;