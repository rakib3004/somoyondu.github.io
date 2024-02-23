const TopExecutivesService = () => {
  const topExecutivesIn2024 = [
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
    {
      name: "সাদমান বিন শাফায়েত",
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

  return topExecutivesByYearMap[2023];
};

export default TopExecutivesService;
