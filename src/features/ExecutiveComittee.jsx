import React from 'react'

import Executives from '../components/Executives';
import ViewMoreButton from '../components/ViewMoreButton'; 

const ExecutiveComittee = () => {
  return (
    <div className='py-6 my-6'>
      {/* <Title/> */}
      <div className='text-center'>
      <h1 className='text-2xl lg:text-3xl text-center font-bold pb-4 text-[#1D0061]'>কার্যনির্বাহী পরিষদ</h1>
      <h1 className='text-md'>
        শিক্ষা, ঐক্য এবং ভ্রাতৃত্ব এই তিনটি স্লোগানকে সামনে রেখে আমাদের এই অগ্রযাত্রা। এই যাত্রাকে তরান্বিত করতে ২০২৩-২৪ বছরের <br />
       জন্য ৬১ সদস্য বিশিষ্ট পুর্নাঙ্গ কার্যনির্বাহী পরিষদ প্রতিনিয়ত কাজ করে যাচ্ছে।
       </h1>
      </div>
      <div className='my-6'>
      </div>

      <Executives/>

      <div className='text-center mt-16'>
      <ViewMoreButton />

      </div>

    </div>
  )
}

export default ExecutiveComittee