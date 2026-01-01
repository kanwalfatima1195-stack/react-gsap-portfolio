import React from 'react'
import star from "../../assets/star3.svg";




const Marquee = () => {
  return (
    <>
      <div className='bg-white text-black pb-28 pt-24 lg:pb-44 overflow-hidden'>
        {/* row 1 */}
        <div className='whitespace-nowrap animate-marquee text-6xl lg:text-[7vw] font-heading
        font-semibold leading-[0.9] tracking-tight'>
            <span className='flex gap-4 lg:gap-8 mx-8'>
                CREATE <img src={star} alt="star" className="marquee-star1 w-[7vw] h-[6vw] max-w-[60px]" />
                DESIGN  <img src={star} alt="star" className="marquee-star1 w-[7vw] h-[6vw]"  />
                INSPIRE <img src={star} alt="star" className="marquee-star1 w-[7vw] h-[6vw]" />
                CREATE  <img src={star} alt="star" className="marquee-star1 w-[7vw] h-[6vw]" />
                DESIGN  <img src={star} alt="star" className="marquee-star1 w-[7vw] h-[6vw]" />
                INSPIRE <img src={star} alt="star" className="marquee-star1 w-[7vw] h-[6vw]" />  
            </span>
        </div>
          {/* row 2 */}
           <div className='whitespace-nowrap animate-marquee-reverse text-6xl lg:text-[7vw] font-heading
        font-semibold leading-[1] tracking-tight'>
            <span className='flex gap-4 lg:gap-8 mx-8'>
                CREATE <img src={star} alt="star" className="marquee-star2 w-[7vw] h-[6vw]" />
                DESIGN  <img src={star} alt="star" className="marquee-star2 w-[7vw] h-[6vw]"  />
                INSPIRE <img src={star} alt="star" className="marquee-star2 w-[7vw] h-[6vw]" />
                CREATE  <img src={star} alt="star" className="marquee-star2 w-[7vw] h-[6vw]" />
                DESIGN  <img src={star} alt="star" className="marquee-star2 w-[7vw] h-[6vw]" />
                INSPIRE <img src={star} alt="star" className="marquee-star2 w-[7vw] h-[6vw]" />  
            </span>
        </div>
      </div>
    </>
  )
}

export default Marquee
