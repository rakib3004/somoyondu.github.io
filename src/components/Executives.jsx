import React from "react";
import ExecutiveCard from "./ExecutiveCard";
const Executives = () => {
  const executives = [
    {
      name: "এম এ এফ ফাহিম",
      designation: "প্রেসিডেন্ট",
      image: "fahim.png",
    },
    {
      name: "জাহিদ হাসান",
      designation: "সিনিয়র ভাইস প্রেসিডেন্ট",
      image: "jahid.png",
    },
    {
        name: "মোঃ আদবুল্লাহ আননুর",
        designation: "জেনারেল সেক্রেটারি",
        image: "mushfiqur.png",
      },
      {
        name: "এস. এম. মুসফিক হোসাইন ",
        designation: "সিনিয়র জয়েন্ট সেক্রেটারি",
        image: "annur.png",
      },
  ];
  return (
    <div className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
    {executives.map((executive)=>(
       <ExecutiveCard key={executive.name} executive={executive}/>
    ))}
    </div>
  );
};

export default Executives;
