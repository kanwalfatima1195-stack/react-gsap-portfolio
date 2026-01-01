    import React, { useRef } from 'react'
    import { gsap } from 'gsap';
    import { useGSAP } from '@gsap/react';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { SplitText } from 'gsap/SplitText';
     
    gsap.registerPlugin(useGSAP, ScrollTrigger,SplitText);
    

    const About = () => {

      const aboutRef = useRef(null)

      useGSAP(()=> {
        SplitText.create(".about-text", {
            type:"lines, chars",
            onSplit(self){
                gsap.set(self.chars, {
                    opacity: 0.2
                });

                gsap.to(self.chars, {
                    opacity: 1,
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start:"top 70%",
                        end:"center center",
                        scrub:1

                    }
                })
            }
        })
      });


    return (
        <>
        <div ref={aboutRef} className=' relative z-20 h-screen bg-white rounded-tl-[60px] rounded-tr-[60px]'>
            <div className='about-text main-container py-4 lg:py-12 h-full flex justify-center items-center
            font-heading text-black text-2xl  md:text-3xl xl:text-4xl leading-[1.25]'>
                 I am a passionate web developer who enjoys creating clean, responsive, and user-friendly websites. I 
                 focus on turning ideas into functional and visually appealing digital experiences using modern 
                 web technologies. I enjoy solving problems, writing clean code, and continuously 
                 learning new tools to improve my skills. My goal is to build websites
                  that not only look good but also perform smoothly and provide a great user experience.
            </div>

        </div>
        </>
    )
    }

    export default About
