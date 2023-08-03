import React from "react";

const ExecutiveCard = ({executive}) => {
  return (
    <div class="w-36 lg:w-64 mx-auto p-1 lg:p-8 bg-white ring-4 ring-[#6251A7] rounded-xl shadow-md ">
        <img
          class="h-12 lg:h-24 mx-auto rounded-full ring-4 ring-[#6251A7] mt-3 lg:mt-7"
          src={executive.image}
          alt="Somoyon Executives"
        />
        <div class="text-center space-y-2 mb-6 mt-4 lg:mt-0">
          <div class="space-y-0.5">
            <p class="text-xs lg:text-lg text-black font-semibold">{executive.name}</p>
            <p class="text-xs lg:text-lg text-gray-500 font-medium">{executive.designation}</p>
          </div>
        </div>
      </div>
  );
};

export default ExecutiveCard;
