import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col'>

      <div className='flex flex-row gap-32 items-center mb-2'>
        <h1 className='text-white font-semibold text-md lg:text-lg'>তথ্য</h1>
        <h1 className='text-white font-semibold flex-grow  -ml-6 lg:ml-8 text-md lg:text-lg'>যোগাযোগ</h1>
      </div>
     
      <div className='flex flex-row  items-center '>
        <h1 className='text-gray-400 font-bold text-sm lg:text-md'><a href="#about"> আমাদের সম্পর্কে </a></h1>
        <h1 className='text-gray-400 font-bold flex-grow ml-12 text-sm lg:text-md'>ফেসবুক পেজ</h1>
      </div>

      <div className='flex flex-row  items-center'>
        <h1 className='text-gray-400 font-bold text-sm lg:text-md'><a href="#gallery"> আমাদের কার্যক্রম </a></h1>
        <h1 className='text-gray-400 font-bold flex-grow ml-12 text-sm lg:text-md'>ইমেইল: somoyon.du@gmail.com</h1>
      </div>

      <div className='flex flex-row items-center '>
        <h1 className='text-gray-400 font-bold text-sm lg:text-md'><a href="#advisor"> উপদেষ্টামণ্ডলী </a></h1>
        <h1 className='text-gray-400 font-bold flex-grow ml-16 text-sm lg:text-md'>মোবাইল: +880 1329 600796</h1>
      </div>

    </div>
  )
}

export default Contact