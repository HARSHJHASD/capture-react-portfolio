import React from 'react';
//Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
//import Framer Motion
import {motion} from 'framer-motion';
//animation.js
import {pageAnimation} from '../animation';
//import ScrollTop
import ScrollTop from '../components/scrollTop';

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
            <ScrollTop />
        </motion.div>
    );
};

export default AboutUs;