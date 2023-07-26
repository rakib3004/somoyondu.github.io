import React from 'react';
import Icon from './Icon';

const SocialMedia = () => {
  return (
    <div className=''>
      <h1 className='text-md text-white font-semibold py-4'>SOCIAL MEDIA</h1>
      <div className='flex flex-row items-center gap-5'>
        <Icon socialMediaName="facebook"/>
        <Icon socialMediaName="twitter"/>
        <Icon socialMediaName="instragram"/>
        <Icon socialMediaName="linkedin"/>
        <Icon socialMediaName="youtube"/>
      </div>
    </div>
  )
}

export default SocialMedia