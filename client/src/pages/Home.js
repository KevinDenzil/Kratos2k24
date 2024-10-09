import React, { useContext, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Countdown from '../components/Countdown';
import TransitionContext from '../context/TransitionContext';
import { isMobile } from 'react-device-detect';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const main = useRef();
  const { completed } = useContext(TransitionContext);
  const sections = useRef([]);

  useGSAP(() => {
    if (!completed) return;

    const panels = gsap.utils.toArray('.panel');

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: !isMobile && i === 1,
        pinSpacing: false
      });
    });

    ScrollTrigger.create({
      snap: isMobile ? false : {
        snapTo: (progress, self) => {
          const sectionProgress = self.progress / (1 / (panels.length - 1));
          return Math.round(sectionProgress) / (panels.length - 1);
        },
        duration: 0.5,
        delay: 0.1,
        ease: "power1.inOut"
      }
    });
  }, { dependencies: [completed, isMobile], scope: main });

  const addToRefs = (el) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  return (
    <main ref={main}>
      <section ref={addToRefs} className='panel initial'>
        <div className='cont'>
          <video autoPlay loop muted playsInline className="background-video">
            <source src={`${process.env.PUBLIC_URL}/firevideo.webm`} type="video/webm" />
            <source src={`${process.env.PUBLIC_URL}/firevideo.mp4`} type="video/mp4" />
          </video>
          {isMobile && (
            <div className="mobile-logo-container">
              <img src={`${process.env.PUBLIC_URL}/kratos24.png`} alt="Kratos 24 Logo" className="mobile-logo" />
            </div>
          )}
          <div className='text-box'>
            KRATOS'24
          </div>
          <div className="scroll-arrow"></div>
        </div>
      </section>
      <section ref={addToRefs} className='panel info'>
      </section>
      <section ref={addToRefs} className='panel countdown'>
        <h1>STARTS IN</h1>
        <Countdown timeTillDate="10 25 2024, 12:00 am" timeFormat="MM DD YYYY, h:mm a" />
      </section>
    </main>
  );
};

export default Home;