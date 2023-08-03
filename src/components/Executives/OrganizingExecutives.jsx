import React from 'react';
import ExecutiveCard from "../ExecutiveCard";

const OrganizingExecutives = () => {
  const organizingExecutives = [
    {
      name: "মাহমুদুল হাসান মারজুক",
      designation: "সাংগঠনিক সম্পাদক",
      image: "marzuk.png",
    },
    {
      name: "মোঃ রাকিব তরফদার",
      designation: "সাংগঠনিক সম্পাদক",
      image: "rakib.png",
    },
    {
      name: "মুন্সি রাব্বি আহমেদ (আকিব)",
      designation: "সাংগঠনিক সম্পাদক",
      image: "akib.png",
    },
    {
      name: "সচিন কুমার অচিন্ত",
      designation: "সাংগঠনিক সম্পাদক",
      image: "sachine.png",
    },
    
    {
      name: "সাইমা আফিফা খান",
      designation: "সাংগঠনিক সম্পাদক",
      image: "afifa.png",
    },
    {
      name: "আয়হান নাভিদ নওরোজ",
      designation: "সাংগঠনিক সম্পাদক",
      image: "navid.png",
    },
    {
      name: "অদ্বিতীয়া মুকুল",
      designation: "সাংগঠনিক সম্পাদক",
      image: "aditiya.png",
    },

  ];
  return (
    <div className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
    {organizingExecutives.map((organizingExecutive)=>(
       <ExecutiveCard executive={organizingExecutive}/>
    ))}
    </div>
  );
}

export default OrganizingExecutives