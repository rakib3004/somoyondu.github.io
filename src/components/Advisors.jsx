import React from 'react'

import AdvisorCard from './AdvisorCard';

const Advisors = () => {
  const advisors = [
    {
      name: "এবিএম আসাদুজ্জামান",
      designation: "ভারপ্রাপ্ত কর্মকর্তা, ভাটারা থানা",
      image: "asaduzzaman.png",
    },
    {
      name: "কাজী শাহান হক",
      designation: "ভারপ্রাপ্ত কর্মকর্তা, খিলক্ষেত থানা",
      image: "kazi-shahin.png",
    },
    {
        name: "অধ্যাপক ড. মোঃ আখতারুজ্জামান",
        designation: "মাননীয় উপাচার্য, ঢাকা বিশ্ববিদ্যালয়",
        image: "akhtaruzzaman.png",
      },
      {
        name: "হাফিজুর রহমান রিয়েল ",
        designation: "উপ-পুলিশ কমিশনার, ট্রাফিক-গুলশান বিভাগ",
        image: "hafizur-rahman.png",
      },
      {
        name: "হাবিবুর রহমান জুয়েল",
        designation: "প্রতিষ্ঠাতা সভাপতি, ফাল্গুনী বাস রুট",
        image: "habibur-rahman.png",
      },
      {
        name: "কামরুল হাসান সেতু",
        designation: "সাবেক সভাপতি, ফাল্গুনী বাস রুট",
        image: "kamrul-hasan.png",
      },
  ];
  return (
    <div className="mx-20 mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {advisors.map((advisor)=>(
       <AdvisorCard advisor={advisor}/>
    ))}
    </div>
  )
}

export default Advisors;