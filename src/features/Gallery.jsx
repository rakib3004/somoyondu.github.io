import React from 'react'
import Title from '../components/Title';
import PictureCard from '../components/PictureCard';

const Gallery = () => {
  return (
    <div className='bg-[#FFF3CF]'>
      {/* <Title/> */}
      <h1 className='text-3xl'>গ্যালারি</h1>
      <h1 className='text-lg'>একনজরে সময়নের কার্যক্রম</h1>

<div className='w-full h-100 text-center text-4xl '>
Picture
</div>
      <PictureCard/>
    </div>
  )
}

export default Gallery