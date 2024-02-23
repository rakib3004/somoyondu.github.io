import { useState } from 'react'

import AllExecutives from '../components/AllExecutives';
import TopLeaders from '../components/Executives/TopLeaders';
import ViewMoreOrLessButton from '../components/ViewMoreOrLessButton';

const ExecutiveCommittee = ({executiveCommitteeInfo}) => {
  const [isDetails, setIsDetails] = useState(true);
  return (
    <div className='py-2 my-6' id="executives">
      <div className='text-center'>
      <h1 className='text-2xl lg:text-3xl text-center font-bold text-[#1D0061]'>{executiveCommitteeInfo.title}</h1>
      </div>
      <TopLeaders/>

      {isDetails? (                 
         <div className='text-center mt-4 lg:mt-16 '>
      <ViewMoreOrLessButton isDetails={isDetails} setIsDetails={setIsDetails} buttonText={executiveCommitteeInfo.expandButtonText}/>
      </div>
      ):(
      
        <div>
          <div className='m-10'></div>
      <AllExecutives/>
      <div className='text-center mt-4 lg:mt-16 '>
      <ViewMoreOrLessButton isDetails={isDetails} setIsDetails={setIsDetails} buttonText={executiveCommitteeInfo.collapseButtonText}/>
      </div>
        </div>
      
      )}

    </div>
  )
}

export default ExecutiveCommittee