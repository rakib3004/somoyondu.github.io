import { useState } from 'react'

import AllExecutives from '../components/AllExecutives';
import ViewMoreButton from '../components/ViewMoreButton'; 
import ViewLessButton from '../components/ViewLessButton';
import TopLeaders from '../components/Executives/TopLeaders';

const ExecutiveComittee = () => {
  const [isDetails, setIsDetails] = useState(true);
  return (
    <div className='py-6 my-6' id="executives">
      <div className='text-center'>
      <h1 className='text-2xl lg:text-3xl text-center font-bold pb-4 text-[#1D0061]'>কার্যনির্বাহী পরিষদ</h1>
      <h1 className='text-md'>
      খিলক্ষেত, ভাটারা, বাড্ডা ও গুলশান-বনানী থানাধীন অঞ্চলে বসবাসরত ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থীদেরকে নিয়ে  ২০২৩-২৪ বছরের <br />
      জন্য ৬১ সদস্য বিশিষ্ট  প্রথম পূর্ণাঙ্গ কার্যনির্বাহী পরিষদ প্রতিনিয়ত কাজ করে যাচ্ছে।
       </h1>
      </div>
      <div className='my-6'>
      </div>

      {isDetails? (
      
      <div>
              <TopLeaders/>

         <div className='text-center mt-4 lg:mt-16 '>
      <ViewMoreButton isDetails={isDetails} setIsDetails={setIsDetails} />
      </div>
      </div>
      
      
      ):(
      
        <div>
          <div className='m-10'></div>
      <AllExecutives/>
      <div className='text-center mt-4 lg:mt-16 '>
      <ViewLessButton isDetails={isDetails} setIsDetails={setIsDetails} />
      </div>
        </div>
      
      
      )}

      {/* <div className='text-center mt-4 lg:mt-16 '>
      <ViewMoreButton isDetails={isDetails} setIsDetails={setIsDetails} />
      </div> */}

    </div>
  )
}

export default ExecutiveComittee