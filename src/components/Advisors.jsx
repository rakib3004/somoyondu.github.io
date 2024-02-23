import React from 'react';

import AdvisorCard from './AdvisorCard';
import AdvisorsService from '../services/AdvisorsService';
const Advisors = () => {
  const advisors = AdvisorsService();
  return (
    <div className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-3">
    {advisors.map((advisor)=>(
       <AdvisorCard key={advisor.name} advisor={advisor}/>
    ))}
    </div>
  )
}

export default Advisors;