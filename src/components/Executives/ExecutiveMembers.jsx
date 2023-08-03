import React from "react";
import ExecutiveCard from "../ExecutiveCard";

const ExecutiveMembers = () => {
  const executiveMembers = [
    {
      name: "সিবগাত উল্লাহ্‌ খান",
      designation: "কার্যনির্বাহী সদস্য",
      image: "fahim.png",
    },
    {
      name: "ফাতেমা হাসান মেহজাবিন",
      designation: "কার্যনির্বাহী সদস্য",
      image: "jahid.png",
    },
    {
      name: "মোঃ মনিরুল ইসলাম সজীব",
      designation: "কার্যনির্বাহী সদস্য",
      image: "mushfiqur.png",
    },
    {
      name: "উম্মে সালমা আলফি",
      designation: "কার্যনির্বাহী সদস্য",
      image: "annur.png",
    },

    {
      name: "প্রান্ত ঘোষ",
      designation: "কার্যনির্বাহী সদস্য",
      image: "fahim.png",
    },
    {
      name: "নোশিন তাবাসসুম তাহেরি",
      designation: "কার্যনির্বাহী সদস্য",
      image: "jahid.png",
    },
    {
      name: "জারিন সুবা",
      designation: "কার্যনির্বাহী সদস্য",
      image: "mushfiqur.png",
    },
    {
      name: "লামিয়া ইসলাম মীম",
      designation: "কার্যনির্বাহী সদস্য",
      image: "annur.png",
    },
    {
      name: "উম্মে সালমা আলফি",
      designation: "কার্যনির্বাহী সদস্য",
      image: "annur.png",
    },

    {
      name: "সৈয়দ সাদমান ইসলাম",
      designation: "কার্যনির্বাহী সদস্য",
      image: "fahim.png",
    },
    {
      name: "নোশিন তাবাসসুম তাহেরি",
      designation: "কার্যনির্বাহী সদস্য",
      image: "jahid.png",
    },
  ];
  return (
    <div className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
      {executiveMembers.map((executiveMember) => (
        <ExecutiveCard key={executiveMember.name} executive={executiveMember} />
      ))}
    </div>
  );
};

export default ExecutiveMembers;
