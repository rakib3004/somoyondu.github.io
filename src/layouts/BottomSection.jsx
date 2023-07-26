import React from 'react';
import BottomLeftSection from '../features/BottomLeftSection';
import BottomRightSection from '../features/BottomRightSection';


const BottomSection = () => {
  return (
    <div className='flex flex-row bg-[#6251A7] h-[230px] w-full'>
      <BottomLeftSection/>
      <BottomRightSection/>
    </div>
  )
}

export default BottomSection