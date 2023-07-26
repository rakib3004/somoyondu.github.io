import React from 'react'
import Title from '../components/Title';
import AdvisorCard from '../components/AdvisorCard';

const AdvisoryComittee = () => {
  return (
    <div className='py-6 my-6'>
      {/* <Title/> */}
      <div className='text-center'>
      <h1 className='text-3xl'>আমাদের উপদেষ্টামণ্ডলী</h1>
      <h1 className='text-md'>
      সময়নের মূল লক্ষ্য সামাজিক কার্যক্রমে নিজেদেরকে নিবেদিত করা৷ পাশাপাশি বিশ্ববিদ্যালয়ের সাধারণ শিক্ষার্থীদের যেকোন প্রয়োজনে <br />
      পাশে দাঁড়ানো। এরই ধারাবাহিকতায় আমরা আমাদের অভিভাবকগণ আমাদের মাথার উপর ছায়া হয়ে আছেন। 
       </h1>
      </div>
      <AdvisorCard/>
    </div>
  )
}

export default AdvisoryComittee