import React from 'react';
import Hero from '../Hero';
import Partners from '../Partners';
import HowItWorks from '../HowItWorks';
import FeaturePanel from '../FeaturePanel';
import Growth from '../Growth';
import Services from '../Services';
import Testimonials from '../Testimonials';
import FAQ from '../FAQ';
import AnimatedSection from '../AnimatedSection';

const HomePage: React.FC = () => {
    return (
        <>
            <AnimatedSection><section id="home"><Hero /></section></AnimatedSection>
            <AnimatedSection><section id="partners"><Partners /></section></AnimatedSection>
            <AnimatedSection><section id="how-it-works"><HowItWorks /></section></AnimatedSection>
            <AnimatedSection><section id="services"><Services /></section></AnimatedSection>
            <AnimatedSection><section id="features"><FeaturePanel /></section></AnimatedSection>
            <AnimatedSection><section id="growth"><Growth /></section></AnimatedSection>
            <AnimatedSection><section id="testimonials"><Testimonials /></section></AnimatedSection>
            <AnimatedSection><section id="faq"><FAQ /></section></AnimatedSection>
        </>
    );
};

export default HomePage;