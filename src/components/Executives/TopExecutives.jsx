import React from "react";
import ExecutiveCard from "../ExecutiveCard";

const TopExecutives = () => {
  const leadExecutives = [
    {
      name: "শিফা তাসনিম ",
      designation: "ভাইস প্রেসিডেন্ট",
      image: "shifa.png",
    },
    {
      name: "আনিকা রয়",
      designation: "জয়েন্ট সেক্রেটারি",
      image: "anika.png",
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
    <div className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
      {leadExecutives.map((leadExecutive) => (
        <ExecutiveCard key={leadExecutive.name} executive={leadExecutive} />
      ))}
    </div>
  );
};

export default TopExecutives;
