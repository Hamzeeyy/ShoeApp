import React from 'react';
import SocialLink from './utils/SocialLink';

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks } }) => {
  // console.log(heroapi)
  return (
   <>
      <div className='relative h-auto w-auto flex flex-col'>
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
        <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
          <div className='grid items-center justify-items-center mt-28 md:mt-24'>
            <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-1xl font-extrabold filter drop-shadow-sm text-slate-200'>{title}</h1>
            <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-1xl font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
            <button type='button' className='button-theme bg-slate-200  shadow-slate-200 rounded-xl my-5'>{btntext}</button>
            <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3'>
              {sociallinks?.map((val, i) => (
                <SocialLink
                  key={i}
                  icon={val.icon}
                />
              ))}
            </div>
          </div>
          <div className='flex items-center'>
            <img
              src={img}
              alt='hero-img/img'
              className='w-auto h-[40vh] lg:h-[30vh] md:h-[26vh] sm:h-[16vh] xsm:h-[14vh] transitions-theme -rotate-[45deg] hover:rotate-0 cursor-pointer object-fill'
            />
          </div>
        </div>
      </div>
   </>
  )
}

export default Hero