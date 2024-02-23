import React from 'react'

const AdvisorCard = ({advisor}) => {
  return (
    <div>
 <div className="w-32 lg:w-60 mx-auto ring-8 ring-[#6251A7] hover:ring-[#D9342E] shadow-md transform hover:scale-105 duration-500">
        <img
          className="h-32 lg:h-60 w-auto"
          src={advisor.image}
          alt="Somoyon Advisors"
        />
        </div>
        <div className="text-center space-y-2 my-5 lg:my-8">
          <div className="space-y-0.5">
            <p className="text-xs lg:text-lg text-black font-semibold">{advisor.name}</p>
            <p className="text-xs lg:text-lg text-gray-500 font-medium">{advisor.designation}</p>
          </div>
        </div>
      
    </div>
  
   
  )
}

export default AdvisorCard