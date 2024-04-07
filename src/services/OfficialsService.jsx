const OfficialsService = (year) => {
  const officialsIn2024 = [
    {
      name: "মামশুকা ফারহাত",
      designation: "কোষাধ্যক্ষ",
      image: "members/2024/mumsuka.jpg",
    },
    {
      name: "মো: আসিফ হোসেন",
      designation: "দপ্তর সম্পাদক",
      image: "members/2024/asif.jpg",
    },
    {
      name: "জুবায়ের মুন্সি",
      designation: "প্রচার সম্পাদক",
      image: "members/2024/jubayer.jpg",
    },
    {
      name: "আল - আমিন",
      designation: "পরিকল্পনা সম্পাদক",
      image: "members/2024/alamin.jpg",
    },
    {
      name: "আব্দুল্লাহ হিল কাফি",
      designation: "সমাজকল্যাণ সম্পাদক",
      image: "members/2024/boy.jpg",
    },
    {
      name: "মাঈনুল ইসলাম",
      designation: "উপ-সমাজকল্যাণ সম্পাদক",
      image: "members/2024/boy.jpg",
    },
    {
      name: "ফারহান নোশিন",
      designation: "তথ্য ও প্রযুক্তি সম্পাদক",
      image: "members/2024/farhan.jpeg",
    },
    {
      name: "রাশেদুল ইসলাম",
      designation: "উপ-তথ্য ও প্রযুক্তি সম্পাদক",
      image: "members/2024/boy.jpg",
    },
    {
      name: "উম্মে সালমা আলফী",
      designation: "আইন বিষয়ক সম্পাদক",
      image: "members/2024/alfi.jpg",
    },
    {
      name: "আমির সিফাত",
      designation: "উপ-আইন বিষয়ক সম্পাদক",
      image: "members/2024/amir.JPG",
    },
    {
      name: "পূজা দে",
      designation: "ছাত্রী বিষয়ক সম্পাদক",
      image: "members/2024/girl.jpg",
    },
    {
      name: "পৃথা সান্যাল",
      designation: "সংস্কৃতি বিষয়ক সম্পাদক",
      image: "members/2024/pritha.jpg",
    },
    {
      name: "আফরোজা তারিন মারজানা",
      designation: "উপ-সংস্কৃতি বিষয়ক সম্পাদক",
      image: "members/2024/girl.jpg",
    },
    {
      name: "আসফিয়া ইসলাম সিমলা",
      designation: "স্বাস্থ্য সম্পাদক",
      image: "members/2024/ashfia.jpg",
    },
    {
      name: "আওফ আনছারী",
      designation: "উপ-স্বাস্থ্য সম্পাদক",
      image: "members/2024/awof.jpg",
    },
    {
      name: "সৈয়দ সাদমান ইসলাম",
      designation: "দুর্যোগ ব্যবস্থাপনা সম্পাদক",
      image: "members/2024/sadman.jpg",
    },
    {
      name: "মাহমুদুল হাসান আবির",
      designation: "ক্রীড়া সম্পাদক",
      image: "members/2024/boy.jpg",
    },
    {
      name: "সিদ্ধার্থ বণিক",
      designation: "উপ-ক্রীড়া সম্পাদক",
      image: "members/2024/shiddhurtha.jpg",
    },
  ];

  const officialsIn2023 = [
    {
      name: "কাজী আদিল আহনাফ",
      designation: "কোষাধ্যক্ষ",
      image: "members/2023/adil.jpg",
    },
    {
      name: "মোঃ ইন্তেসার যুবায়ের",
      designation: "দপ্তর সম্পাদক",
      image: "members/2023/boy.jpg",
    },
    {
      name: "আকিবুল ইসলাম আকিব",
      designation: "উপ-দপ্তর সম্পাদক",
      image: "members/2023/akibul.jpg",
    },
    {
      name: "সাবের হোসেন",
      designation: "প্রচার সম্পাদক",
      image: "members/2023/saber.jpg",
    },
    {
      name: "মোঃ আমিনুল ইসলাম",
      designation: "উপ-প্রচার সম্পাদক",
      image: "members/2023/aminul.jpg",
    },
    {
      name: "দেবপ্রিয় ভট্টাচার্য্য দীপু",
      designation: "সমাজ কল্যাণ সম্পাদক",
      image: "members/2023/dipu.jpg",
    },
    {
      name: "শরিফুল ইসলাম সজল",
      designation: "উপ-সমাজ কল্যাণ সম্পাদক",
      image: "members/2023/boy.jpg",
    },
    {
      name: "রায়রা বিনতে রাফিক",
      designation: "তথ্য প্রযুক্তি সম্পাদক",
      image: "members/2023/girl.jpg",
    },
    {
      name: "মোঃ নাজমুল",
      designation: "উপ-তথ্য প্রযুক্তি সম্পাদক",
      image: "members/2023/nazmul.jpg",
    },
    {
      name: "কাওসার জাহান ইরিন",
      designation: "ছাত্রী বিষয়ক সম্পাদক",
      image: "members/2023/erin.jpg",
    },
    {
      name: "হাসনাত নিদ্রা",
      designation: "উপ-ছাত্রী বিষয়ক সম্পাদক",
      image: "members/2023/hasnat.JPG",
    },
    {
      name: "আবু রাহাত",
      designation: "ত্রাণ ও দুর্যোগ ব্যবস্থাপনা সম্পাদক",
      image: "members/2023/boy.jpg",
    },
    {
      name: "শাফায়েত ইসলাম",
      designation: "উপ-ত্রাণ ও দুর্যোগ ব্যবস্থাপনা সম্পাদক",
      image: "members/2023/boy.jpg",
    },
    {
      name: "মোঃ তায়্যেবুর রহমান",
      designation: "ক্রীড়া সম্পাদক",
      image: "members/2023/tayebur.jpg",
    },
    {
      name: "মাহিবুল আলম রিমন",
      designation: "উপ-ক্রীড়া সম্পাদক",
      image: "members/2023/boy.jpg",
    },
    {
      name: "হাসিনা আক্তার",
      designation: "পরিকল্পনা সম্পাদক",
      image: "members/2023/girl.jpg",
    },
    {
      name: "নাফিয়া আলম মালিহা",
      designation: "উপ-পরিকল্পনা সম্পাদক",
      image: "members/2023/girl.jpg",
    },
    {
      name: "শাহাদাত হোসেন",
      designation: "আইন বিষয়ক সম্পাদক",
      image: "members/2023/boy.jpg",
    },
    {
      name: "মোঃ আবু জায়েদ",
      designation: "উপ-আইন বিষয়ক সম্পাদক",
      image: "members/2023/boy.jpg",
    },
    {
      name: "লিওন রিছিল",
      designation: "স্বাস্থ্য সম্পাদক",
      image: "members/2023/boy.jpg",
    },
    {
      name: "মুশফিকুর রহমান মিজু",
      designation: "উপ-স্বাস্থ্য সম্পাদক",
      image: "members/2023/boy.jpg",
    },
    {
      name: "মোসাঃ মাবিয়া আক্তার ",
      designation: "সাংস্কৃতিক বিষয়ক সম্পাদক",
      image: "members/2023/mabia.jpg",
    },
    {
      name: "মুকছেতাতুন নোভা",
      designation: "উপ-সাংস্কৃতিক বিষয়ক সম্পাদক",
      image: "members/2023/girl.jpg",
    },
    {
      name: "আনিকা তাবাসসুম রুপা",
      designation: "আতিথেয়তা বিষয়ক সম্পাদক",
      image: "members/2023/girl.jpg",
    },
    {
      name: "আব্দুল্লাহ আল আরাফাত (শুদ্ধ)",
      designation: "উপ-আতিথেয়তা বিষয়ক সম্পাদক",
      image: "members/2023/boy.jpg",
    },
    {
      name: "মাহতাব আল তানবীম",
      designation: "ধর্ম বিষয়ক সম্পাদক",
      image: "members/2023/boy.jpg",
    },
    {
      name: "আলভী আহমেদ খান",
      designation: "কর্পোরেট জোট সম্পাদক",
      image: "members/2023/boy.jpg",
    },
  ];

  const officialsByYearMap = {
    2024: officialsIn2024,
    2023: officialsIn2023,
  };

  return officialsByYearMap[year];
};

export default OfficialsService;
