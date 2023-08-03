import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row'>

      <div className='flex flex-col items-center mb-2 lg:mr-16'>
        <h1 className='text-white font-semibold text-md lg:text-lg'>তথ্য</h1>
        <h1 className='text-gray-400 font-bold text-sm lg:text-md'><a href="#about"> আমাদের সম্পর্কে </a></h1>
        <h1 className='text-gray-400 font-bold text-sm lg:text-md'><a href="#gallery"> আমাদের কার্যক্রম </a></h1>
        <h1 className='text-gray-400 font-bold text-sm lg:text-md'><a href="#advisor"> উপদেষ্টামণ্ডলী </a></h1>



      </div>
     
      <div className='flex flex-col items-center '>
      <h1 className='text-white  font-bold  text-md lg:text-lg'>যোগাযোগ</h1>
        <h1 className='text-gray-400 font-bold text-sm lg:text-md'><a href="https://www.facebook.com/somoyondu">ফেসবুক পেজ</a></h1>
        <h1 className='text-gray-400 font-bold text-sm lg:text-md'>ইমেইল: somoyon.du@gmail.com</h1>
        <h1 className='text-gray-400 font-bold text-sm lg:text-md'>মোবাইল: +880 1329 600796</h1>

      </div>

  

    </div>
  )
}

export default Contact