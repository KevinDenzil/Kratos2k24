import React, { useContext, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Countdown from '../components/Countdown';
import backgroundVideo from '../assets/fire.mp4';
import TransitionContext from '../context/TransitionContext';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const main = useRef();
  const { completed } = useContext(TransitionContext);
  const sections = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    if (!completed) return;

    const panels = gsap.utils.toArray('.panel');
    
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: !isMobile && i === 1, // Only pin on desktop
        pinSpacing: false
      });
    });

    // Adjust animations for mobile
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
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className='text-box'>
            KRATOS'24
          </div>
        </div>
      </section>
      <section ref = {addToRefs} className='panel info'>
        
      </section>
      <section ref={addToRefs} className='panel countdown'>
        <h1>STARTS IN</h1>
        <Countdown timeTillDate="10 25 2024, 12:00 am" timeFormat="MM DD YYYY, h:mm a" />
      </section>
    </main>
  );
};

export default Home;