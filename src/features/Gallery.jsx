import React from 'react'
import Title from '../components/Title';
import PictureCard from '../components/PictureCard';

const Gallery = () => {
  return (
    <div className='bg-[#FFF3CF] py-6 my-6'>
      {/* <Title/> */}
      <div className='text-center'>
      <h1 className='text-3xl'>গ্যালারি</h1>
      <h1 className='text-md'>একনজরে সময়নের কার্যক্রম</h1>
      </div>

      <PictureCard/>
    </div>
  )
}

export default Gallery