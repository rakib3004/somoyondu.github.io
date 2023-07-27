import React from "react";

const ExecutiveCard = () => {
  return (
    <div>
      <div class="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2">
        <img
          class="h-24 mx-auto rounded-full ring-4 ring-green-400"
          src="/images/logo.png"
          alt="Learn with Sumit logo"
        />
        <div class="text-center space-y-2">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">এম এ এফ ফাহিম</p>
            <p class="text-gray-500 font-medium">প্রেসিডেন্ট</p>
          </div>
          <button class="px-4 py-1 border border-purple-200 rounded-full text-sm text-purple-600 font-semibold">
            Visit now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveCard;
