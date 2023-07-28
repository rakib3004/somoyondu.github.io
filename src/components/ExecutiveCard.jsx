import React from "react";

const ExecutiveCard = ({executive}) => {
  return (
    <div class="w-64 mx-auto p-8 bg-white ring-4 ring-[#6251A7] rounded-xl shadow-md ">
        <img
          class="h-24 mx-auto rounded-full ring-4 ring-[#6251A7] mt-7"
          src={executive.image}
          alt="Somoyon Executives"
        />
        <div class="text-center space-y-2 mb-6">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">{executive.name}</p>
            <p class="text-gray-500 font-medium">{executive.designation}</p>
          </div>
        </div>
      </div>
  );
};

export default ExecutiveCard;
