const ExecutiveMembersService = (year) => {
  const executiveMembersIn2024 = [
    {
      name: "মোঃ আব্দুল্লাহ মাহমুদ মিরার",
      designation: "সদস্য, গ্রাফিক্স ও প্রোগ্রাম গ্রুপ",
      image: "members/boy.jpg",
    },
    {
      name: "হামীম উর রহমান তানিম",
      designation: "সদস্য, গ্রাফিক্স ও প্রোগ্রাম গ্রুপ",
      image: "members/boy.jpg",
    },
    {
      name: "মোহাম্মাদ শাহজালাল বারি",
      designation: "সদস্য, কন্টেন্ট গ্রুপ",
      image: "members/boy.jpg",
    },
    {
      name: "মোঃ রিহাদুল ইসলাম রিহাদ",
      designation: "সদস্য, কন্টেন্ট গ্রুপ",
      image: "members/boy.jpg",
    },
    {
      name: "জুহাই-উর- আহমেদ সৌভিক",
      designation: "সদস্য, কন্টেন্ট গ্রুপ",
      image: "members/boy.jpg",
    },
    {
      name: "আহমেদ সৌমিক হাসান",
      designation: "সদস্য, অতিথি ব্যবস্থাপনা গ্রুপ",
      image: "members/boy.jpg",
    },
    {
      name: "জুবায়ের আহনাফ তালহা",
      designation: "সদস্য, অতিথি ব্যবস্থাপনা গ্রুপ",
      image: "members/boy.jpg",
    },
    {
      name: "তাবাসসুম আফসা চোহা",
      designation: "সদস্য, অতিথি ব্যবস্থাপনা গ্রুপ",
      image: "members/girl.jpg",
    },
    {
      name: "দেবজ্যোতি দত্ত আঁচল",
      designation: "সদস্য, অতিথি ব্যবস্থাপনা গ্রুপ",
      image: "members/girl.jpg",
    },
    {
      name: "আফিফ হাসান",
      designation: "সদস্য, অতিথি ব্যবস্থাপনা গ্রুপ",
      image: "members/boy.jpg",
    },
  ];

  const executiveMembersIn2023 = [
    {
      name: "মো: মাসুম বিল্লাহ ",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/masum.jpg",
    },
    {
      name: "মোঃ মনিরুল ইসলাম সজীব",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/monirul.jpg",
    },
    {
      name: "জুবায়ের মুন্সী",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/jubayer.jpg",
    },
    {
      name: "মামশুকা ফারহাত",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/mumsuka.jpg",
    },
    {
      name: "লামিয়া ইসলাম মীম",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/mim.jpg",
    },
    {
      name: "সৈয়দ সাদমান ইসলাম",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/sadman.jpg",
    },

    {
      name: "সিবগাত উল্লাহ্‌ খান",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/boy.jpg",
    },
    {
      name: "ফাতেমা হাসান মেহজাবিন",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/girl.jpg",
    },

    {
      name: "প্রান্ত ঘোষ",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/boy.jpg",
    },
    {
      name: "নোশিন তাবাসসুম তাহেরি",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/girl.jpg",
    },
    {
      name: "জারিন সুবা",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/girl.jpg",
    },

    {
      name: "উম্মে সালমা আলফি",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/girl.jpg",
    },
  ];

  const executiveMembersByYearMap = {
    2024: executiveMembersIn2024,
    2023: executiveMembersIn2023,
  };

  return executiveMembersByYearMap[year];
};

export default ExecutiveMembersService;
