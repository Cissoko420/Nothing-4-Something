import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[url(/images/wallpaper.jpg)] overflow-y-auto bg-cover bg-center flex min-h-screen flex-col items-center justify-between font-[NothingSomething]'>
      <div className='peer animate-custom-bounce mt-[-20px] md:mt-0 ease-in-out bg-[url(/images/piece_paper.png)] bg-contain bg-no-repeat bg-center w-[400px] h-[200px] md:w-[500px] md:h-[250px] flex items-center justify-center text-4xl md:text-5xl hover:text-orange-400'>
        Nothing 4 Something
      </div>
      <div className='absolute mt-[170px] text-3xl md:mt-64 font-bold md:text-5xl peer-hover:animate-custom-pulse peer-hover:delay-500 peer-hover:duration-700 peer-hover:ease-in-out text-red-700 text-neon'>
        Get SOMETHING 4 NOTHING
      </div>
      <div className="bg-black w-[400px] md:w-[1000px] object-center h-[1500px] md:h-[1700px] mt-5 md:mt-16 opacity-75 rounded-2xl p-9 md:p-12 shadow-[0_0_50px_theme('colors.amber.900')]">
        <span className='font-bold text-center justify-center text-5xl md:text-7xl flex items-center mb-14 md:mb-20'>
          It all starts with NOTHING
        </span>
        <span className='font-bold text-4xl md:text-6xl'>Collection Size</span>
        <span className='text-xl md:text-4xl ml-12 md:ml-64'> ¿?¿?¿? NFTs</span>
        <span className='mt-3 font-bold text-4xl md:text-6xl flex md:mt-8'>
          Price
        </span>
        <span className=' text-2xl md:text-4xl ml-14 mb-2 font-bold'>
          - Saga Gen Holders
        </span>
        <span className='ml-5 text-xl md:text-4xl md:ml-64'>FREE</span>
        <span className='flex'></span>
        <span className='text-2xl ml-14 font-bold md:text-4xl'>- Public</span>
        <span className='text-xl ml-[120px] md:text-4xl md:ml-[405px]'>
          0.01 SOL
        </span>
        <span className='mt-3 md:mt-8 flex'></span>
        <span className='font-bold text-4xl md:text-6xl'>Royalties</span>
        <span className='ml-[110px] text-xl md:text-4xl md:ml-[350px]'>
          {' '}
          5%
        </span>
        <span className='font-bold mt-[90px] text-center md:mt-40 md:text-7xl justify-center text-5xl flex items-center mb-14 md:mb-20'>
          It ends with SOMETHING
        </span>
        <span className='font-bold text-4xl md:text-6xl'>Supply</span>
        <span className='text-xl ml-[145px] md:text-4xl md:ml-[405px]'>
          ¿?¿?¿?
        </span>
        <span className='flex text-4xl font-bold mt-5 md:mt-10 md:text-6xl'>
          Distribution
        </span>
        <span className='text-2xl font-bold mt-3 ml-14 md:text-4xl'>
          - Nothing Holders
        </span>
        <span className='text-xl ml-5 md:text-4xl md:ml-64'>90%</span>
        <span className='flex'></span>
        <span className='text-2xl font-bold mt-2 ml-14 md:text-4xl'>
          - Liquidity
        </span>
        <span className='text-xl ml-[85px] md:text-4xl md:ml-[355px]'>10%</span>
        <span className='flex text-4xl font-bold mt-5 md:text-6xl'>
          Royalties Allocation
        </span>
        <span className='font-bold text-2xl ml-14 mt-3 md:text-4xl'>
          - Team
        </span>
        <span className='text-xl ml-[110px] md:text-4xl md:ml-[390px]'>
          0.1%
        </span>
        <span className='flex'></span>
        <span className='font-bold text-2xl ml-14 mt-3 md:text-4xl'>
          - Liquidity
        </span>
        <span className='text-xl ml-[85px] md:text-4xl md:ml-[350px]'>
          4.9%
        </span>
        <span className='flex text-2xl justify-center text-center mt-14 italic md:mt-28 md:text-3xl'>
          During first 90 days 100% will go to SOMETHING Liquidity
        </span>
        <span className='flex text-3xl justify-center text-center mt-5 italic md:text-3xl md:mt-10'>
          After first 90 days 80% to Liquidity and 20% subject to community vote
        </span>
        <span className='mt-16 text-center flex text-5xl italic font-bold'>
          Something token launches 30 days after NFT launches
        </span>
      </div>
    </main>
  )
}
