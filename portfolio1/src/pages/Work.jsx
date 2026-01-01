import React, { useRef } from 'react'
import GradientButton from '../components/GradientButton'
import projects from '../components/ProjectsData'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

 
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {

 const workRef= useRef(null);
 const projectRef = useRef(null);

useGSAP(()=> {
  const projectsWidth = projectRef.current.scrollWidth;
  const scrollDistance = projectsWidth - window.innerWidth;

  gsap.to(projectRef.current, {
    x: -scrollDistance,
    ease:"linear",
    scrollTrigger: {
      trigger: workRef.current,
      start:"center center",
     end: () => `+=${window.innerWidth * 1.2}`,
      pin:true,
      pinSpacing:true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  })
});

  return (
    <>
        <div ref={workRef} className="relative bg-white text-black py-24 lg:py-32 overflow-hidden">
            {/* title wrapper */}
            <div className='main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6
            justify-between items-start md:items-end'>
               <div className='max-w-xl'>
                <h3 className='mb-3'>Selected Work</h3>
                <p className='text-lg lg:text-xl'>A showcase of my selected projects-designed to inspire,engage, and deliver real results.</p>

               </div>
               <GradientButton text=" Explore All" link="/projects" className='btn-light'/>
            </div>

           {/* project wrapper */}
           <div ref={projectRef}>
               <div  className='flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6'>
                {projects.map(({id, name , image})=> (
                    <a  key={id}
      href=""
      className='relative rounded-2xl w-full min-w-[340px] lg:min-w-xl h-64 lg:h-96 block 
       overflow-hidden group '
    >
      <img
        src={image}
        alt={name}
        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
      />
      <span
        className='absolute top-4 right-4 bg-black text-white uppercase leading-[1.4]
         font-heading px-5 py-1 rounded-full text-sm lg:text-lg'
      >
        {name}
      </span>
    </a>
                ))}
               </div>
               </div>
            
        </div>



    </>
  )
}

export default Work
