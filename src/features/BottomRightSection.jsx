import React from 'react';
import FooterTitle from '../components/FooterTitle';
import Contact from '../components/Contact';

const BottomRightSection = () => {
  return (
    <div className='right w-3/5 lg:w-1/2'>
      <FooterTitle/>
      <Contact/>
    </div>
  )
}

export default BottomRightSection