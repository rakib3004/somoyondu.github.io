import React from 'react'
import ImageSlider from '../components/ImageSlider';

const Gallery = () => {
  return (
    <div className='bg-[#FFF3CF] py-6 my-6'>
      {/* <Title/> */}
      <div className='text-center'>
      <h1 className='text-5xl text-center font-bold pb-4 pt-6 text-[#1D0061]'>গ্যালারি</h1>
      <h1 className='text-base'>একনজরে সময়নের কার্যক্রম</h1>
      </div>

      <ImageSlider/>
    </div>
  )
}

export default Gallery