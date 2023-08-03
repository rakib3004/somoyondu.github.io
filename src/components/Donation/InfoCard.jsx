import React from 'react'

const InfoCard = ({donationMedium}) => {
  return (
    <div className='bg-white ring-2 ring-[#CBBEFF] rounded-xl shadow-md m-2 p-2'>
    <img src={donationMedium.image} />
    <h1 className='text-xl font-bold text-center'>{donationMedium.phoneNumber}</h1>
    </div>
  )
}

export default InfoCard