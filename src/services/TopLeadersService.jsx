const TopLeadersService = () => {

  const topLeadersIn2024 = [
    {
      name: "এম এ এফ ফাহিম",
      designation: "সভাপতি",
      image: "members/fahim.png",
    },
    {
      name: "জাহিদ হাসান",
      designation: "সিনিয়র সহ সভাপতি",
      image: "members/zahid.jpeg",
    },
    {
      name: "মোঃ আদবুল্লাহ আননুর",
      designation: "সাধারণ সম্পাদক",
      image: "members/annur.png",
    },
    {
      name: "এস. এম. মুসফিক হোসাইন ",
      designation: "সিনিয়র যুগ্ম-সাধারণ সম্পাদক",
      image: "members/musfick.jpg",
    },
  ];

  const topLeadersIn2023 = [
    {
      name: "এম এ এফ ফাহিম",
      designation: "সভাপতি",
      image: "members/fahim.png",
    },
    {
      name: "জাহিদ হাসান",
      designation: "সিনিয়র সহ সভাপতি",
      image: "members/zahid.jpeg",
    },
    {
      name: "মোঃ আদবুল্লাহ আননুর",
      designation: "সাধারণ সম্পাদক",
      image: "members/annur.png",
    },
    {
      name: "এস. এম. মুসফিক হোসাইন ",
      designation: "সিনিয়র যুগ্ম-সাধারণ সম্পাদক",
      image: "members/musfick.jpg",
    },
  ];

  const topLeadersByYearMap = {
    2024: topLeadersIn2024,
    2023: topLeadersIn2023,
  };
  return topLeadersByYearMap[2023];
};

export default TopLeadersService;
