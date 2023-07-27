import React from "react";

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
    <div className=" flex flex-row">
    {executives.map((executive)=>(
        <div class="w-64 mx-auto p-8 bg-white ring-4 ring-[#6251A7] rounded-xl shadow-md ">
        <img
          class="h-24 mx-auto rounded-full ring-4 ring-[#6251A7] mt-7"
          src={executive.image}
          alt="Learn with Sumit logo"
        />
        <div class="text-center space-y-2 mb-6">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">{executive.name}</p>
            <p class="text-gray-500 font-medium">{executive.designation}</p>
          </div>
        </div>
      </div>
    ))}
     
    </div>
  );
};

export default Executives;
