import type { NextPage } from 'next';


const Header: NextPage = () => {
  return (
    <div className='bg-gray-1300 [backdrop-filter:blur(93px)] w-full h-20 text-left text-sm text-dimgray-100 font-aksara-bali-galang flex flex-row justify-around items-center container mx-auto'>
      <div className='flex flex-row w-full h-[46px]'>
        <div className=' h-11 text-xs flex flex-row'>
          <div className=' rounded-71xl w-[378px] h-[42px]' />
          <img className=' w-6 h-6 overflow-hidden opacity-[0.5]' alt='' src='/basesearch2.svg' />
          <div className=''>{`Search items, games, AI `}</div>
        </div>
        <div className='flex'>
          <div className=''>Games</div>
          <div className=''>AI Bots</div>
          <div className=''>Metaverse</div>
          <div className=''>Contact Us</div>
        </div>
        <div className='flex'>
          <div className='  h-11 text-base text-white font-advent-pro'>
            <img className='  h-11' alt='' src='/rectangle-11.svg' />
            <b className=' tracking-[0.04em] leading-[110.6%] uppercase flex items-center '>
              'CONNECT WALLET'
            </b>
            <img className=' top-[12px] left-[25px] w-5 h-5 overflow-hidden' alt='' src='/moneywalletone1.svg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
