import React from 'react';
//import Framer Motion
import {motion} from 'framer-motion';
//animation.js
import {pageAnimation} from '../animation';

const ContactUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <h1>Our Contact</h1>
        </motion.div>
    );
};

export default ContactUs;