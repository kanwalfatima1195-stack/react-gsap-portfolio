import React, { useRef, useState } from 'react'
import GradientButton from '../../components/GradientButton'
import MessageModal from '../../components/MessageModal'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
 
gsap.registerPlugin(useGSAP, ScrollTrigger,SplitText);

const Hero = () => {

const heroRef = useRef(null);
const [isModalOpen, setIsModalOpen] = useState(false);

// pin hero section
useGSAP(()=> {
  ScrollTrigger.create({
    trigger:heroRef.current,
    start:"top top",
    end: "bottom top",
    pin:true,
    pinSpacing:false,
    scrub:1
  });

SplitText.create("h1" , {
  type:"lines,words",
  mask: "lines",
  autoSplit: true,
  onSplit(self) {
    gsap.from(self.words, {
      y:100,
      opacity:0,
      stagger:0.1
    })
  }
});

SplitText.create("h2" , {
  type:"lines,words",
  mask: "lines",
  autoSplit: true,
  onSplit(self) {
    gsap.from(self.words, {
      y:100,
      opacity:0,
      stagger:0.1,
      delay:0.3
    })
  }
});

gsap.from(".gradient-btn", {
  opacity: 0,
  y: 40,
  duration: 0.5,
  ease: "power2.out",
  delay:1.25
})



},{scope: heroRef}
);



  return (
    <>
      <div ref={heroRef} className='relative overflow-hidden'>
        <div  className='main-container h-screen flex flex-col lg:justify-center items-start lg:py-12 
        max-lg:pt-40'>
        <h1 className='text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold'>IQRA HAMMAD</h1>
        <h2 className='text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight mt-3 mb-6 '>Web 
        Developer <br /> & <span className='text-stroke'> Designer </span>
        </h2>
        <GradientButton 
          text="Let's Talk" 
          onClick={() => setIsModalOpen(true)} 
          className='gradient-btn' 
        />
        <MessageModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
        </div>
      </div>
    </>
  )
}

export default Hero
