import React from 'react';
import ExecutiveCard from "../ExecutiveCard";

const OrganizingExecutives = () => {
  const organizingExecutives = [
    {
      name: "মাহমুদুল হাসান মারজুক",
      designation: "সাংগঠনিক সম্পাদক",
      image: "fahim.png",
    },
    {
      name: "মোঃ রাকিব তরফদার",
      designation: "সাংগঠনিক সম্পাদক",
      image: "jahid.png",
    },
    {
      name: "মুন্সি রাব্বি আহমেদ (আকিব)",
      designation: "সাংগঠনিক সম্পাদক",
      image: "mushfiqur.png",
    },
    {
      name: "সচিন কুমার অচিন্ত",
      designation: "সাংগঠনিক সম্পাদক",
      image: "annur.png",
    },
    {
      name: "তাহসিন নাওয়ার প্রাচী",
      designation: "সাংগঠনিক সম্পাদক",
      image: "fahim.png",
    },
    {
      name: "সাইমা আফিফা খান",
      designation: "সাংগঠনিক সম্পাদক",
      image: "jahid.png",
    },
    {
      name: "আয়হান নাভিদ নওরোজ",
      designation: "সাংগঠনিক সম্পাদক",
      image: "mushfiqur.png",
    },
    {
      name: "অদ্বিতীয়া মুকুল",
      designation: "সাংগঠনিক সম্পাদক",
      image: "annur.png",
    },

  ];
  return (
    <div className="mx-20 mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4">
    {organizingExecutives.map((organizingExecutive)=>(
       <ExecutiveCard executive={organizingExecutive}/>
    ))}
    </div>
  );
}

export default OrganizingExecutives