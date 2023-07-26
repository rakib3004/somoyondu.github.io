import React from 'react';
import BottomLeftSection from '../features/BottomLeftSection';
import BottomRightSection from '../features/BottomRightSection';


const BottomSection = () => {
  return (
    <div className='flex flex-row bg-[#6251A7] h-auto w-full pt-24 pb-16'>
      <BottomLeftSection/>
      <BottomRightSection/>
    </div>
  )
}

export default BottomSection