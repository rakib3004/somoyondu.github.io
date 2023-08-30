import React from 'react'

const AdvisorCard = ({advisor}) => {
  return (
    <div>
 <div class="w-32 lg:w-40 mx-auto ring-8 ring-[#6251A7] hover:ring-[#D9342E] shadow-md transform hover:scale-105 duration-500">
        <img
          class="h-32 lg:h-40 w-auto"
          src={advisor.image}
          alt="Somoyon Advisors"
        />
        </div>
        <div class="text-center space-y-2 my-5 lg:my-1">
          <div class="space-y-0.5">
            <p class="text-xs lg:text-lg text-black font-semibold">{advisor.name}</p>
            <p class="text-xs lg:text-lg text-gray-500 font-medium">{advisor.designation}</p>
          </div>
        </div>
      
    </div>
  
   
  )
}

export default AdvisorCard