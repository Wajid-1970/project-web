import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {

  return (

    <div id="herosection" className='min-h-screen bg-no-repeat-bg-[url(/my_Image_01.jpg)] bg.cover'

      style={{backgroundSize: "50%", backgroundPosition: "left 100px top 100 px"}}
      >

        <Navbar />
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>

          <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
            <div>
              <p data-aos="zoom-in-up">I'm </p>
              <p data-aos="zoom-in-up">Abdul</p>
              <p data-aos="zoom-in-up">Wajid</p>
              <p data-aos="zoom-in-up">Warsi</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection
