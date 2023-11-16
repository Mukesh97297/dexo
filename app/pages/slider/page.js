'use client';
import React from 'react'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
function SlickCarousel() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     arrows: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };

    return (
        <div className='bg-gradient-radial lg:h-[500px] h-full border border-solid border-opacity-[16%] border-gray-300'>


            <div className='container mx-auto px-4   '>
                <div className='' style={{
                    background: 'radial-gradient(58.43% 58.43% at 50% 0%, rgba(103, 33, 255, 0.24) 0%, rgba(197, 97, 255, 0.1) 47.92%, rgba(6, 11, 39, 0) 100%)',
                }}>
                    {/* <Slider {...settings}>
                        <div className='text-center justify-center  !flex'>
                            <div>
                                <div className='flex justify-center pt-20'>
                                    <span className=' h-[56px] w-[56px] bg-[#6721FF] rounded-[50%] !flex items-center justify-center text-center '><Image src="/images/25 9.png " width={45} height={45} alt='' /></span>
                                </div>
                                <p className='font-aeonik font-normal italic text-[28px] leading-9 text-white pt-10'>“I had used DEXO for several years and I had never encountered <br className='lg:block hidden' />
                                    a problem adding or cashing-out money from the platform. Is<br className='lg:block hidden' /> great for short investment because so many people are using it<br className='lg:block hidden' />
                                    so buying crypto can be quick and straightforward. ”</p>
                                <div className='py-10'>
                                    <p className='text-white font-normal text-lg leading-5'>Marshall Bock</p>
                                    <span className='text-[#8F9BB7] font-normal text-base leading-5'>UI Design Manager, Crypto Investor</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-center justify-center !flex'>
                            <div>
                                <div className='flex justify-center pt-20'>
                                    <span className=' h-[56px] w-[56px] bg-[#6721FF] rounded-[50%] !flex items-center justify-center text-center '><Image src="/images/25 9.png " width={45} height={45} alt='' /></span>
                                </div>
                                <p className='font-aeonik font-normal italic text-[28px] leading-9 text-white pt-10'>“I had used DEXO for several years and I had never encountered <br className='lg:block hidden' />
                                    a problem adding or cashing-out money from the platform. Is<br className='lg:block hidden' /> great for short investment because so many people are using it<br className='lg:block hidden' />
                                    so buying crypto can be quick and straightforward. ”</p>
                                <div className='py-10'>
                                    <p className='text-white font-normal text-lg leading-5'>Marshall Bock</p>
                                    <span className='text-[#8F9BB7] font-normal text-base leading-5'>UI Design Manager, Crypto Investor</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-center justify-center  !flex'>
                            <div>
                                <div className='flex justify-center pt-20'>
                                    <span className=' h-[56px] w-[56px] bg-[#6721FF] rounded-[50%] !flex items-center justify-center text-center '><Image src="/images/25 9.png " width={45} height={45} alt='' /></span>
                                </div>
                                <p className='font-aeonik font-normal italic text-[28px] leading-9 text-white pt-10'>“I had used DEXO for several years and I had never encountered <br className='lg:block hidden' />
                                    a problem adding or cashing-out money from the platform. Is<br className='lg:block hidden' /> great for short investment because so many people are using it<br className='lg:block hidden' />
                                    so buying crypto can be quick and straightforward. ”</p>
                                <div className='py-10'>
                                    <p className='text-white font-normal text-lg leading-5'>Marshall Bock</p>
                                    <span className='text-[#8F9BB7] font-normal text-base leading-5'>UI Design Manager, Crypto Investor</span>
                                </div>
                            </div>
                        </div>
                    </Slider> */}
                </div>

            </div>
        </div>
    )
}

export default SlickCarousel
