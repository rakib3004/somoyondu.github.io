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
        name: "এস এম মুশফিক হোসেন",
        designation: "সিনিয়র জয়েন্ট সেক্রেটারি",
        image: "annur.png",
      },
  ];
  return (
    <div className="mx-20 mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {executives.map((executive)=>(
       <ExecutiveCard executive={executive}/>
    ))}
    </div>
  );
};

export default Executives;
