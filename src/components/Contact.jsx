import React from 'react'

const Contact = () => {
  return (
    <div>

      <div className='flex flex-row gap-32 items-left mb-6'>
        <h1 className='text-white font-semibold'>তথ্য</h1>
        <h1 className='text-white font-semibold'>যোগাযোগ</h1>
      </div>

      <div className='flex flex-row gap-10 items-left '>
        <h1 className='text-white'>আমাদের সম্পর্কে</h1>
        <h1 className='text-white'>ফেসবুক পেজ</h1>
      </div>

      <div className='flex flex-row gap-10 items-left'>
        <h1 className='text-white'>আমাদের কার্যক্রম</h1>
        <h1 className='text-white'>ইমেইল: somoyon.du@gmail.com</h1>
      </div>

      <div className='flex flex-row gap-16 items-left '>
        <h1 className='text-white'>উপদেষ্টামণ্ডলী</h1>
        <h1 className='text-white'>মোবাইল: +880 1329 600796</h1>
      </div>

    </div>
  )
}

export default Contact