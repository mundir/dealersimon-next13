'use client'

import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Jual Beli Mobil dan Motor Berkualitas dan Terpercaya.
                </h1>

                <p className='hero__subtitle'>cara cepat dan mudah untuk jual beli Mobil dan Motor. Anda mau jual atau beli? semua ada disini</p>
                <CustomButton
                    title="Cari Mobil"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll} />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src="/hero.png" alt='hero' fill className='object-contain' />
                </div>
                <div className='hero__image-overlay' />
            </div>
        </div>
    )
}

export default Hero