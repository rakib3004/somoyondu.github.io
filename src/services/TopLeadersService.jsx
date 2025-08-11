const TopLeadersService = (year) => {
  const topLeadersIn2025 = [
    {
      name: "মোঃ তায়্যেবুর রহমান",
      designation: "সভাপতি",
      image: "members/2025/tayebur.png",
    },
    {
      name: "মুশফিকুর রহমান মিজু",
      designation: "সিনিয়র সহ সভাপতি",
      image: "members/2024/mizu.jpg",
    },
    {
      name: "মামশুকা ফারহাত",
      designation: "সাধারণ সম্পাদক",
      image: "members/2025/farhat.jpg",
    },
    {
      name: "মোঃ নাজমুল",
      designation: "সিনিয়র যুগ্ম-সাধারণ সম্পাদক",
      image: "members/2025/nazmul.jpg",
    },
    {
      name: "মো: মাসুম বিল্লাহ",
      designation: "সিনিয়র যুগ্ম-সাধারণ সম্পাদক",
      image: "members/2024/masum.jpg",
    },
  ];
  const topLeadersIn2024 = [
    {
      name: "মুন্সি রাব্বি আহমেদ (আকিব)",
      designation: "সভাপতি",
      image: "members/2024/akib.jpg",
    },
    {
      name: "ইমামুল হক",
      designation: "সিনিয়র সহ সভাপতি",
      image: "members/2024/immemul.jpg",
    },
    {
      name: "মাহমুদুল হাসান মার্জুক",
      designation: "সাধারণ সম্পাদক",
      image: "members/2024/marzuk.png",
    },
    {
      name: "মোঃ শিপলুর রহমান",
      designation: "সিনিয়র যুগ্ম-সাধারণ সম্পাদক",
      image: "members/2024/shiplur.jpg",
    },
  ];

  const topLeadersIn2023 = [
    {
      name: "এম এ এফ ফাহিম",
      designation: "সভাপতি",
      image: "members/2023/fahim.png",
    },
    {
      name: "জাহিদ হাসান",
      designation: "সিনিয়র সহ সভাপতি",
      image: "members/2023/zahid.jpeg",
    },
    {
      name: "মোঃ আদবুল্লাহ আননুর",
      designation: "সাধারণ সম্পাদক",
      image: "members/2023/annur.png",
    },
    {
      name: "এস. এম. মুসফিক হোসাইন",
      designation: "সিনিয়র যুগ্ম-সাধারণ সম্পাদক",
      image: "members/2023/musfick.jpg",
    },
  ];

  const topLeadersByYearMap = {
    2025: topLeadersIn2025,
    2024: topLeadersIn2024,
    2023: topLeadersIn2023,
  };
  return topLeadersByYearMap[year];
};

export default TopLeadersService;
