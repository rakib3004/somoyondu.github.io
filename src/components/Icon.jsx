import React from 'react';

const Icon = ({socialMediaName}) => {
  return (
    <div>
        <a href={`www.${socialMediaName}.com`}><img src={`${socialMediaName}.png`} alt={socialMediaName} /></a>
    </div>
  )
}

export default Icon;