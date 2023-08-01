import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col justify-between'>

      <div className='flex flex-row gap-32 items-left mb-6'>
        <h1 className='text-white font-semibold text-md lg:text-lg'>তথ্য</h1>
        <h1 className='text-white font-semibold flex-grow  -ml-6 lg:ml-8 text-md lg:text-lg'>যোগাযোগ</h1>
      </div>

      <div className='flex flex-row  items-left '>
        <h1 className='text-gray-400 text-sm lg:text-lg'>আমাদের সম্পর্কে</h1>
        <h1 className='text-gray-400 flex-grow ml-2 text-sm lg:text-lg'>ফেসবুক পেজ</h1>
      </div>

      <div className='flex flex-row  items-left'>
        <h1 className='text-gray-400 text-sm lg:text-lg'>আমাদের কার্যক্রম</h1>
        <h1 className='text-gray-400 flex-grow ml-2 text-sm lg:text-lg'>ইমেইল: somoyon.du@gmail.com</h1>
      </div>

      <div className='flex flex-row items-left '>
        <h1 className='text-gray-400 text-sm lg:text-lg'>উপদেষ্টামণ্ডলী</h1>
        <h1 className='text-gray-400 flex-grow ml-2 text-sm lg:text-lg'>মোবাইল: +880 1329 600796</h1>
      </div>

    </div>
  )
}

export default Contact