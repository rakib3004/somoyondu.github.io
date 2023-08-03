import React from 'react';
import ExecutiveCard from "../ExecutiveCard";

const OfficialExecutives = () => {
  const officialExecutives = [
    {
      name: "কাজী আদিল আহনাফ",
      designation: "কোষাধ্যক্ষ",
      image: "fahim.png",
    },
    {
      name: "মোঃ ইন্তেসার যুবায়ের",
      designation: "অফিস সেক্রেটারি",
      image: "jahid.png",
    },
    {
      name: "আকিবুল ইসলাম আকিব",
      designation: "ডেপুটি অফিস সেক্রেটারি",
      image: "mushfiqur.png",
    },
    {
      name: "সাবের হোসেন",
      designation: "প্রেস সেক্রেটারি",
      image: "annur.png",
    },
    {
      name: "মোঃ আমিনুল ইসলাম",
      designation: "ডেপুটি প্রেস সেক্রেটারি",
      image: "annur.png",
    }, {
      name: "দেবপ্রিয় দিপু",
      designation: "সমাজ কল্যাণ সেক্রেটারি",
      image: "annur.png",
    }, {
      name: "শরিফুল ইসলাম সজল",
      designation: "ডেপুটি সমাজ কল্যাণ সেক্রেটারি",
      image: "annur.png",
    },
  ];
  return (
    <div className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
      {officialExecutives.map((officialExecutive) => (
        <ExecutiveCard executive={officialExecutive} />
      ))}
    </div>
  );
}

export default OfficialExecutives