import React from 'react'

const AdvisorCard = ({advisor}) => {
  return (
    <div>
 <div class="w-40 mx-auto ring-8 ring-[#6251A7] shadow-md ">
        <img
          class="h-40 w-auto"
          src={advisor.image}
          alt="Somoyon Advisors"
        />
        </div>
        <div class="text-center space-y-2 my-6">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">{advisor.name}</p>
            <p class="text-gray-500 font-medium">{advisor.designation}</p>
          </div>
        </div>
      
    </div>
  
   
  )
}

export default AdvisorCard