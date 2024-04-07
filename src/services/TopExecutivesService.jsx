const TopExecutivesService = (year) => {
  const topExecutivesIn2024 = [
    {
      name: "শচীন মন্ডল",
      designation: "সহ সভাপতি",
      image: "members/sachin.jpg",
    },
    {
      name: "মোঃ রাকিব তরফদার",
      designation: "সহ সভাপতি",
      image: "members/rakib.jpg",
    },
    {
      name: "জুয়েল সরকার",
      designation: "সহ সভাপতি",
      image: "members/boy.jpg",
    },
    {
      name: "প্রসেনজিৎ দেব পার্থ",
      designation: "সহ সভাপতি",
      image: "members/prosenjeet.jpg",
    }, 
    {
      name: "অদ্বিতীয়া মুকুল",
      designation: "সহ সভাপতি",
      image: "members/additiya.jpg",
    }, 
    {
      name: "নাঈম আহমেদ",
      designation: "সহ সভাপতি",
      image: "members/boy.jpg",
    }, 
    {
      name: "মোঃ হুমায়ুন রশিদ খান",
      designation: "সহ সভাপতি",
      image: "members/boy.jpg",
    }, 
    {
      name: "তামান্না আক্তার",
      designation: "সহ সভাপতি",
      image: "members/girl.jpg",
    }, 
    {
      name: "কাজী আদিল আহনাফ",
      designation: "যুগ্ম-সাধারণ সম্পাদক",
      image: "members/adil.jpg",
    },
    {
      name: "মো: ইনতেসার জোবায়ের",
      designation: "যুগ্ম-সাধারণ সম্পাদক",
      image: "members/boy.jpg",
    },
    {
      name: "মাহিদ মুস্তাফিজ",
      designation: "যুগ্ম-সাধারণ সম্পাদক",
      image: "members/boy.jpg",
    },
    {
      name: "কাওসার জাহান ইরিন",
      designation: "যুগ্ম-সাধারণ সম্পাদক",
      image: "members/erin.jpg",
    },
    {
      name: "মোঃ তায়্যেবুর রহমান",
      designation: "যুগ্ম-সাধারণ সম্পাদক",
      image: "members/tayebur.jpg",
    },
    {
      name: "দেবপ্রিয় ভট্টাচার্য দিপু",
      designation: "যুগ্ম-সাধারণ সম্পাদক",
      image: "members/boy.jpg",
    }, 
    {
      name: "সাবের হোসেন",
      designation: "যুগ্ম-সাধারণ সম্পাদক",
      image: "members/boy.jpg",
    },
  ];

  const topExecutivesIn2023 = [
    {
      name: " মোঃ আশিকুর রহমান",
      designation: "সহ সভাপতি",
      image: "members/ashiqur.jpg",
    },
    {
      name: "শিফা তাসনিম",
      designation: "সহ সভাপতি",
      image: "members/shifa.png",
    },
    {
      name: "মেহেদি হাসান",
      designation: "সহ সভাপতি",
      image: "members/boy.jpg",
    },
    {
      name: "আনিকা রয়",
      designation: "যুগ্ম-সাধারণ সম্পাদক",
      image: "members/anika.png",
    },
    {
      name: "মোঃ আশিক উল্লাহ্‌ ফাহিদ",
      designation: "যুগ্ম-সাধারণ সম্পাদক",
      image: "members/boy.jpg",
    },

    {
      name: "সাদমান বিন শাফায়েত",
      designation: "যুগ্ম-সাধারণ সম্পাদক",
      image: "members/boy.jpg",
    },
  ];

  const topExecutivesByYearMap = {
    2024: topExecutivesIn2024,
    2023: topExecutivesIn2023,
  };

  return topExecutivesByYearMap[year];
};

export default TopExecutivesService;
