const Header = props => {
  return (
    <>
      <div className='flex flex-row w-full h-20 container mx-auto'>
        <div className='flex w-1/2'>
          <div className='flex justify-between w-full '>
            {/* logo */}
            <img src='/18-2-1-1@2x.png' alt='' />
            {/* search */}
            <div className='flex w-full md:w-3/4 justify-center items-center'>
              <form className='w-4/5'>
                <label className='relative block'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-orange-300'>
                    <svg
                      className='h-5 w-5 fill-red text-red-500 '
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width={30}
                      height={30}
                      viewBox='0 0 30 30'
                    >
                      <path d='M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z' />
                    </svg>
                  </span>
                  <input
                    className='w-full h-14 bg-white placeholder:font-italitc border border-orange-300 rounded-full py-2 pl-10 pr-4 focus:outline-none'
                    placeholder='Search Items, Games and Metaverses'
                    type='text'
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-1/2">

        <div className='md:flex h-full justify-center hidden items-center'>
          <div className='px-4 py-2 cursor-pointer'>Games</div>
          <div className='px-4 py-2 cursor-pointer'>AI Bots</div>
          <div className='px-4 py-2 cursor-pointer'>Metaverse</div>
        </div>
        <div className='hidden md:flex justify-end items-center'>
          <div className='px-6 py-4 cursor-pointer border border-orange-400 mx-2 '>Contact Us</div>
          <div className='px-6 py-4 cursor-pointer bg-orange-400 text-white '>CONNECT WALLET</div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Header;
