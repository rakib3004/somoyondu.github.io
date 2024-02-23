import { useState } from 'react'

import AllExecutives from '../components/AllExecutives';
import ViewMoreButton from '../components/ViewMoreButton'; 
import ViewLessButton from '../components/ViewLessButton';
import TopLeaders from '../components/Executives/TopLeaders';

const ExecutiveCommittee = () => {
  const [isDetails, setIsDetails] = useState(true);
  return (
    <div className='py-2 my-6' id="executives">
      <div className='text-center'>
      <h1 className='text-2xl lg:text-3xl text-center font-bold text-[#1D0061]'>কার্যনির্বাহী পরিষদ ২০২৩</h1>
      </div>
      <TopLeaders/>

      {isDetails? (                 
         <div className='text-center mt-4 lg:mt-16 '>
      <ViewMoreButton isDetails={isDetails} setIsDetails={setIsDetails} />
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

    </div>
  )
}

export default ExecutiveCommittee