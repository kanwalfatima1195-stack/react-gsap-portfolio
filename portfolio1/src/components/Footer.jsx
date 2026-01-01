import React from 'react'
import Logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <>
      {/* divider */}
       <div className='max-w-[1500px] m-auto h-[1px] bg-white opacity-10'></div>

       <footer className='main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20'>
        <img src={Logo} alt="" />
        <div>
            <h5 className='font-medium mb-5 '>Services</h5>
            <ul className='flex flex-col gap-2 text-base lg:text-lg'>
                <li>
                    <a href="">Web Design</a>
                </li>
                 <li>
                    <a href="">UI / UX</a>
                </li>
                 <li>
                    <a href="">Web Development</a>
                </li>
                 <li>
                    <a href="">Branding</a>
                </li>

            </ul>
        </div>
<div>
      <h5 className='font-medium mb-5 '>Accessibility</h5>
       <ul className='flex flex-col gap-2 text-base lg:text-lg'>
                <li>
                    <a href="">Mon - Fri:9:00 - 5:00</a>
                </li>
                 <li>
                    <a href="">24/7 Whatsapp & email</a>
                </li>
                </ul>
</div>

          <div>
      <h5 className='font-medium mb-5 '>Contact</h5>
       <ul className='flex flex-col gap-2 text-base lg:text-lg'>
                <li>
                    <a href="">iqrahammad@gmail.com</a>
                </li>
                 <li>
                    <a href="">+92 332 2776331</a>
                </li>
                </ul>
</div>          
       </footer>

       {/* divider */}
       <div className='max-w-[1500px] m-auto h-[1px] bg-white opacity-10'></div>
       <div className='main-container grid md:grid-cols-2 gap-3 py-6 lg:py-8 max-md:text-center'>
        <div className='text-base lg:text-lg'> 2025 IH | All rights reserved</div>
        {/* <div></div> */}

       </div>


    </>
  )
}

export default Footer
