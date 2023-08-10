import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useState } from 'react';
import React from 'react';
const HeroSection = props => {
  return (
    <>
      <div className='relative flex flex-col container'>
        <div className='flex flex-row justify-center items-start ml-8 pt-8'>
          <div className='md:w-1/2 '>
            <div className='text-[80px] pl-7 font-light text-transparent bg-clip-text bg-gradient-linear from-gradient-start to-gradient-end'>
              Explore Worlds
              <br />
              With Few Clicks
            </div>
          </div>
          <div className='md:w-1/2'>
            <img src='/gb.svg' alt='game phone logo' />
          </div>
        </div>
        <div className='absolute top-[13.5%]'>
          <Splide
            options={{
              type: 'loop',
              gap: '1rem',
              autoplay: true,
              perPage: 3,
              pauseOnHover: false,
              resetProgress: false,
              pagination: false,
              arrowPath: false,
              arrows: false
            }}
            aria-label='Clients'
          >
            {/* <SplideTrack> */}
            {/* <SplideSlide>
          <img className="mx-auto max-h-full my-auto" src={footerLogos.src} alt="Image 1" />
        </SplideSlide> */}
            <SplideSlide>
              <img className='mx-auto max-h-[350px]  my-auto' src='/image-164@2x.png' alt='Image 2' />
            </SplideSlide>
            <SplideSlide>
              <img
                className='mx-auto max-h-[480px] my-auto'
                src='/32d2b1401c7a86c61fae5afeed977b37-1@2x.png'
                alt='Image 2'
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className='mx-auto max-h-[480px] my-auto'
                src='/bec6ef1112da9b3a4e67af09b69960df-1@2x.png'
                alt='Image 2'
              />
            </SplideSlide>
            {/* <SplideSlide>
          <img className='mx-auto max-h-full my-auto' src={wms2.src} alt='Image 2' />
        </SplideSlide>

        <SplideSlide>
          <img className='mx-auto max-h-full my-auto' src={DSCLogo.src} alt='Image 2' />
        </SplideSlide> */}
          </Splide>
        </div>
        <div className='absolute hidden top-0 -z-20 bg-whyte w-full h-[3236px] text-left text-61xl font-epilogue'>
          <div className='absolute top-[96px] left-[0px] w-[1440px] h-[700px]' />
          <img
            className='absolute h-[56.99%] w-[160.07%] top-[3.39%] right-[-30.03%] bottom-[39.62%] left-[-30.03%] max-w-full overflow-hidden max-h-full'
            alt=''
            src='/group-61.svg'
          />
          {/* start here pasting grid */}

          {/* newsletter part here */}

          {/* end grid */}
          {/* <Footer
            theFund='logo'
            theFundIsTheWorldsFirstNo='lemon'
            group25='/group-254.svg'
            rankings='Creator'
            activity='Krafter'
            showT={false}
            tVisible={false}
            showVentures={false}
            showGrants={false}
            showGroupDiv={false}
            footerPosition='absolute'
            footerBackgroundColor='rgba(255, 255, 255, 0.37)'
            footerBackdropFilter='blur(10px)'
            footerTop='2914px'
            footerLeft='0px'
            groupDivHeight='189px'
            groupDivHeight1='156px'
            groupDivWidth='0px'
            groupDivHeight2='0px'
            theFundColor='#1f1d2b'
            theFundIsTheTop='88.46%'
            theFundIsTheColor='#1f1d2b'
            groupDivWidth1='54px'
            groupDivHeight3='86px'
            companyBackground='linear-gradient(90.71deg, #73e0a9, #5b68df)'
            aboutTop='39.53%'
            aboutColor='#1f1d2b'
            careersTop='79.07%'
            careersColor='#1f1d2b'
            venturesTop='118.6%'
            venturesColor='#1f1d2b'
            grantsTop='158.14%'
            grantsColor='#1f1d2b'
            groupDivWidth2='120px'
            helpCenterTop='22.08%'
            helpCenterColor='#1f1d2b'
            gasFreeMarketplaceTop='44.16%'
            gasFreeMarketplaceColor='#1f1d2b'
            blogTop='66.23%'
            blogColor='#1f1d2b'
            newsletterTop='88.31%'
            newsletterColor='#1f1d2b'
            followUsOnBackground='linear-gradient(90.71deg, #73e0a9, #5b68df)'
            groupDivWidth3='43px'
            statsBackground='linear-gradient(90.71deg, #73e0a9, #5b68df)'
            rankingsTop='39.53%'
            rankingsColor='#1f1d2b'
            activityTop='79.07%'
            activityColor='#1f1d2b'
          /> */}
          {/* <PlayExploreContainer /> */}
          {/* these are the arrow buttons  */}
          {/* <div className='absolute h-[1.24%] w-[2.78%] top-[9.52%] right-[87.57%] bottom-[89.25%] left-[9.65%]'>
            <div className='absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-whyte' />
            <div className='absolute h-3/5 w-3/5 top-[20%] right-[20%] bottom-[20%] left-[20%]'>
              <div className='absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]' />
              <img
                className='absolute h-[63.26%] w-[52.37%] top-[18.37%] right-[22.63%] bottom-[18.37%] left-[25%] max-w-full overflow-hidden max-h-full'
                alt=''
                src='/guide2.svg'
              />
            </div>
          </div>
          <div className='absolute h-[1.24%] w-[2.78%] top-[9.52%] right-[87.57%] bottom-[89.25%] left-[9.65%]'>
            <div className='absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-whyte' />
            <div className='absolute h-3/5 w-3/5 top-[20%] right-[20%] bottom-[20%] left-[20%]'>
              <div className='absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]' />
              <img
                className='absolute h-[63.26%] w-[52.37%] top-[18.37%] right-[22.63%] bottom-[18.37%] left-[25%] max-w-full overflow-hidden max-h-full'
                alt=''
                src='/guide2.svg'
              />
            </div>
          </div> */}
          {/* arrow buttons here */}
          {/* <div className='absolute h-[1.24%] w-[2.78%] top-[10.75%] right-[89.17%] bottom-[88.01%] left-[8.06%] [transform:_rotate(-180deg)] [transform-origin:0_0]'>
            <div className='absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-whyte [transform:_rotate(-180deg)] [transform-origin:0_0]' />
            <div className='absolute h-3/5 w-3/5 top-[-20%] right-[60%] bottom-[60%] left-[-20%] [transform:_rotate(-180deg)] [transform-origin:0_0]'>
              <div className='absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [transform:_rotate(-180deg)] [transform-origin:0_0]' />
              <img
                className='absolute h-[63.26%] w-[52.37%] top-[-81.63%] right-[125%] bottom-[118.37%] left-[-77.37%] max-w-full overflow-hidden max-h-full'
                alt=''
                src='/guide3.svg'
              />
            </div>
          </div> */}
          {/* floating action button */}
          {/* <img
            className='absolute top-[736px] left-[1320px] rounded-6xs w-[37px] h-[43px] object-cover'
            alt=''
            src='/image-187@2x.png'
          /> */}
          {/* ----- */}
        </div>
        {/* end of this */}
        {/* first grid */}
        <div className='relative top-[500px]'></div>
        <div className='flex  gap-8 px-20'>
          <div className='flex flex-col gap-8'>
            <img
              className=' w-[475px] h-[462px] object-cover'
              alt=''
              src='/b3668d7deb043d0f43b5813b0365be8f-1@2x.png'
            />
            <div className='flex gap-8'>
              <img
                className=' w-[304px] h-[285px] object-cover'
                alt=''
                src='/d710fe8830d731072485a582881605ea-1@2x.png'
              />
              <div className='flex flex-col gap-8'>
                <img
                  className='w-[137px] h-[137px] object-cover'
                  alt=''
                  src='/0e49f86ec1509ef756fadeefa0ce917c-1@2x.png'
                />
                <img
                  className='w-[137px] h-[137px] object-cover'
                  alt=''
                  src='/0e49f86ec1509ef756fadeefa0ce917c-1@2x.png'
                />
              </div>
            </div>
          </div>
          <img className=' w-[785px] h-[800px] object-cover' alt='' src='/b6707a4d51293936c3aaeaefc84af038-1@2x.png' />
        </div>

        {/* second grid */}
        <div className='flex py-20 px-20 gap-8'>
          <img className='rounded-[17.63px] w-[400px] h-[400px] object-cover' alt='' src='/image-161@2x.png' />
          <img className='rounded-[17.63px] w-[400px] h-[400px] object-cover' alt='' src='/image-170@2x.png' />
          <img className='rounded-[17.63px] w-[400px] h-[400px] object-cover' alt='' src='/image-157@2x.png' />
        </div>

        <div className='hidden bg-red-400 h-full w-full z-50 flex relative -top-[706px] '>
          <img className=' w-[475px] h-[462px] object-cover' alt='' src='/b3668d7deb043d0f43b5813b0365be8f-1@2x.png' />
          <div className='relative top-[1319px] left-[80px] flex flex-row gap-[40px]'></div>
        </div>
        {/* end of this */}
      </div>
    </>
  );
};
export default HeroSection;
