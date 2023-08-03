import React from 'react'
import InfoCard from './InfoCard'

const DonationCard = () => {
  const donationMediums = [
    {
      image: 'rocket.png',
      phoneNumber : '016114930633',
    },
    {
      image: 'bkash.png',
      phoneNumber : '01329600796',
    },
    {
      image: 'nagad.png',
      phoneNumber : '016114930633',
    },
  ]
  return (
    <div className='m-8 flex  flex-col lg:flex-row'>
      {donationMediums.map((donationMedium)=>(
       <InfoCard donationMedium={donationMedium}/>
    ))}
    </div>
  )
}

export default DonationCard