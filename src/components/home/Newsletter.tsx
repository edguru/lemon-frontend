import React from 'react';

import UilfacebookMessengerAltIcon from '../uilfacebook-messenger-alt-icon';
import UiltwitterAltIcon from '../uiltwitter-alt-icon';
import AkarIconsinstagramFill from '../akar-iconsinstagram-fill';
import AkarIconswhatsappFill from '../akar-iconswhatsapp-fill';

const NewsLetter = props => {
  return (
    <>
      <div className='static container mx-auto px-20 flex gap-8'>
        <div className='relative w-[506px] h-[472px] gap-8'>
          <div className='absolute bottom-[0px] left-[0px] rounded-xl [background:linear-gradient(132.05deg,_#9747ff,_#ff6813)] w-[506px] h-[472px]' />
          <div className='absolute bottom-[0] left-[0px] rounded-tl-xl rounded-tr-31xl rounded-b-xl bg-gray-100 shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] w-[506px] h-[151.67px]' />
          <UilfacebookMessengerAltIcon />
          <UiltwitterAltIcon />
          <AkarIconsinstagramFill />
          <AkarIconswhatsappFill />
          <div className='absolute top-[194px] left-[29.83px] rounded-xl bg-opacity-[20%] w-[450.61px] h-[79.2px] flex flex-row py-[85px] px-8 box-border items-center justify-center'>
            <input
              className='relative inline-block w-[353px] px-4 py-2 border-none  bg-gray-100 shrink-0 z-20'
              placeholder='Enter Your Email'
            />
          </div>
          <div className='flex flex-col justify-end items-end text-end pr-4 pt-2 w-full absolute top-[0px]'>
            <b className='  text-white  text-29xl  w-full h-[96.66px]'>Get Your Newsletter</b>
            <div className=' top-[0] text-white  text-5xl  w-full h-[33.18px]'>Stay Up To Date</div>
          </div>
        </div>
        <div className='flex flex-col gap-8'>
          <img src='/image-160@2x.png' className='h-[224px] w-[224px]' alt='image' />
          <img src='/image-160@2x.png' className='h-[224px] w-[224px]' alt='image' />
        </div>
        <div className='flex flex-col'>
          <img src='/image-172@2x.png' className='h-[472px] w-[474px]' alt='image' />
        </div>
      </div>
    </>
  );
};
export default NewsLetter;
