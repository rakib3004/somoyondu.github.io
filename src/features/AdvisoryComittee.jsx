import React from 'react'

import Advisors from '../components/Advisors';

const AdvisoryComittee = () => {
  return (
    <div className='py-2 my-1 lg:py-6 lg:my-6' id="advisors">
      <div className='text-center'>
      <h1 className='text-2xl lg:text-3xl text-center font-bold pb-4 text-[#1D0061]'>আমাদের উপদেষ্টামণ্ডলী</h1>
      <h1 className='text-md'>
      সময়নের মূল লক্ষ্য সামাজিক কার্যক্রমে নিজেদেরকে নিবেদিত করা৷ পাশাপাশি বিশ্ববিদ্যালয়ের সাধারণ শিক্ষার্থীদের যেকোন প্রয়োজনে <br />
      পাশে দাঁড়ানো। এরই ধারাবাহিকতায় আমরা আমাদের অভিভাবকগণ আমাদের মাথার উপর ছায়া হয়ে আছেন। 
       </h1>
      </div>
      <div>
      <Advisors/>
      </div>
     
    </div>
  )
}

export default AdvisoryComittee