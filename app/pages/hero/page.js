import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className=''>
            <div className='bg-back-color lg:min-h-[1097px] min-h-auto flex justify-center  bg-cover'>
                <div className=' bg-hero-back-img bg-no-repeat min-h-[1097px] w-full bg-cover absolute'></div>
                <div className='mx-auto container px-4'>
                    <div className='grid grid-cols-12 justify-center'>
                        <div className='col-span-12 flex justify-center items-center text-center relative'>
                            <div className='pt-[186px]'>
                                <div className='py-2'>
                                    <span className='font-normal text-lg leading-5 gradient-text py-1'>BUILT ON BSC. POWERED BY YOU</span>
                                </div>
                                <div className=" py-2">
                                    <h1 className=' lg:text-[64px] font-bold lg:leading-[73px] leading-10 text-4xl text-white tracking-[-0.01em]'>The Future of Decentralized <br className='md:block hidden' /> Perpetual Exchange</h1>
                                </div>
                                <div className='py-2'>
                                    <p className=' font-normal lg:text-2xl text-lg lg:leading-8 leading-6 text-[#8F9BB7]'>Trade BTC, ETH, BNB and other top cryptocurrencies <br className='md:block hidden' /> directly from your wallet</p>
                                </div>
                                <div className=' lg:gap-10 md:gap-10 sm:gap-10 gap-0 lg:flex md:flex sm:flex block justify-center py-10'>
                                    <button className='rounded-[40px] min-h-[66px] lg:w-[167px] sm:w-[167px] w-full text-white bg-gradient-custom shadow-xl lg:my-0 my-2' style={{ boxShadow: '0px 20px 40px 0px rgba(155, 120, 255, 0.52)' }}>Start Trading</button>
                                    <button className='text-[#7A38FF] border border-[#7A38FF] rounded-[40px] min-h-[66px] lg:w-[167px] sm:w-[167px] w-full lg:my-0 my-2' >Add Liquidifty</button>
                                </div>
                                <div className="relative">
                                    <Image src="/images/Rectangle 8.png" height={436} width={980} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
