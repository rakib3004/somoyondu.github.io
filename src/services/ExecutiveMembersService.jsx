const ExecutiveMembersService = (year) => {
  const executiveMembersIn2025 = [
      {
        name: "সাদমান সাকিব খন্দকার",
        designation: "যুগ্ম সাধারণ সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "তানামু রহমান স্বনাম",
        designation: "সাধারণ সদস্য",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. আসিফ হোসেন",
        designation: "যুগ্ম সাধারণ সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "আফরোজা তারিন মারজানা",
        designation: "উপ-কোষাধ্যক্ষ",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. রায়হান",
        designation: "সহ-সভাপতি",
        image: "members/2025/boy.jpg"
      },
      {
        name: "সিদ্ধার্থ বণিক",
        designation: "উপ-দপ্তর সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. রাশেদুল ইসলাম",
        designation: "উপ-পরিবেশ বিষয়ক সম্পাদক ২",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মোহাম্মদ শাহজালাল বারি",
        designation: "উপ-সাংগঠনিক সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "তাওয়াসুম",
        designation: "উপ-ক্রীড়া সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "সাকিব মাহমুদ বিজয়",
        designation: "যুগ্ম সাধারণ সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "আবির খন্দকার",
        designation: "কোষাধ্যক্ষ",
        image: "members/2025/boy.jpg"
      },
      {
        name: "আওয়াফ আনসারী",
        designation: "উপ-প্রেস সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "জুহাই-উর-আহমেদ শৌভিক",
        designation: "উপ-ত্রাণ ও দুর্যোগ বিষয়ক সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "আব্দুল্লাহ আল ফাহাদ",
        designation: "উপ-ক্রীড়া সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "সাকিব ইহসান",
        designation: "সমাজকল্যাণ সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "কাজী নাদিয়া জাফরিন",
        designation: "উপ-সমাজকল্যাণ সম্পাদক ১",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. সাব্বির হোসেন",
        designation: "ক্রীড়া সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. নয়ন",
        designation: "পরিবেশ বিষয়ক সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. তায়েবুর রহমান",
        designation: "সভাপতি",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. নাজমুল",
        designation: "যুগ্ম সাধারণ সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "কাজী সিয়াম ফারদিন",
        designation: "তথ্য ও প্রযুক্তি সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "তৌহিদুর রহমান তালুকদার",
        designation: "ত্রাণ ও দুর্যোগ বিষয়ক সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "ফারহান নওশীন",
        designation: "সাংগঠনিক সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "সাফায়াতুল ইসলাম",
        designation: "যুগ্ম সাধারণ সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "নুসরাত জাহান সাদিয়া",
        designation: "দপ্তর সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. নুরুন্নবী মিয়া",
        designation: "সাধারণ সদস্য",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. সামিউল ইসলাম সৌরভ",
        designation: "সাধারণ সদস্য",
        image: "members/2025/boy.jpg"
      },
      {
        name: "অর্ণা হালদার",
        designation: "উপ-সমাজকল্যাণ সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "তাসনিয়া ইসলাম পারসা",
        designation: "সাধারণ সদস্য",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. আবু সাঈদ সোহাগ",
        designation: "সাধারণ সদস্য",
        image: "members/2025/boy.jpg"
      },
      {
        name: "নূর-উল-আইন",
        designation: "সাধারণ সদস্য",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. মাহমুদুল হাসান আবির",
        designation: "প্রেস সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "সাবের হোসেন",
        designation: "সহ-সভাপতি",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মুমসুকা ফারহাত",
        designation: "সাধারণ সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "পৃথা সান্যাল",
        designation: "সাংস্কৃতিক সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "প্রান্ত ঘোষ",
        designation: "পরিবেশ বিষয়ক সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. ইন্তেসার জোবায়ের",
        designation: "সহ-সভাপতি",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. আব্দুল্লাহ মাহমুদ মিরার",
        designation: "উপ-তথ্য ও প্রযুক্তি সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "হামিম উর রহমান তানিম",
        designation: "উপ-সাংস্কৃতিক সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. আমিনুল ইসলাম",
        designation: "যুগ্ম সাধারণ সম্পাদক",
        image: "members/2025/boy.jpg"
      },
      {
        name: "মো. নাহিদ হাসান",
        designation: "সাধারণ সদস্য",
        image: "members/2025/boy.jpg"
      }
  ];

  const executiveMembersIn2024 = [
    {
      name: "মোঃ আব্দুল্লাহ মাহমুদ মিরার",
      designation: "সদস্য, গ্রাফিক্স ও প্রোগ্রাম গ্রুপ",
      image: "members/2024/mirar.jpg",
    },
    {
      name: "হামীম উর রহমান তানিম",
      designation: "সদস্য, গ্রাফিক্স ও প্রোগ্রাম গ্রুপ",
      image: "members/2024/tanim.jpg",
    },
    {
      name: "মোহাম্মাদ শাহজালাল বারি",
      designation: "সদস্য, কন্টেন্ট গ্রুপ",
      image: "members/2024/boy.jpg",
    },
    {
      name: "মোঃ রিহাদুল ইসলাম রিহাদ",
      designation: "সদস্য, কন্টেন্ট গ্রুপ",
      image: "members/2024/boy.jpg",
    },
    {
      name: "জুহাই-উর- আহমেদ সৌভিক",
      designation: "সদস্য, কন্টেন্ট গ্রুপ",
      image: "members/2024/juhai.jpg",
    },
    {
      name: "আহমেদ সৌমিক হাসান",
      designation: "সদস্য, অতিথি ব্যবস্থাপনা গ্রুপ",
      image: "members/2024/soumic.jpg",
    },
    {
      name: "জুবায়ের আহনাফ তালহা",
      designation: "সদস্য, অতিথি ব্যবস্থাপনা গ্রুপ",
      image: "members/2024/boy.jpg",
    },
    {
      name: "তাবাসসুম আফসা চোহা",
      designation: "সদস্য, অতিথি ব্যবস্থাপনা গ্রুপ",
      image: "members/2024/girl.jpg",
    },
    {
      name: "দেবজ্যোতি দত্ত আঁচল",
      designation: "সদস্য, অতিথি ব্যবস্থাপনা গ্রুপ",
      image: "members/2024/auchal.jpg",
    },
    {
      name: "আফিফ হাসান",
      designation: "সদস্য, অতিথি ব্যবস্থাপনা গ্রুপ",
      image: "members/2024/boy.jpg",
    },
  ];

  const executiveMembersIn2023 = [
    {
      name: "মো: মাসুম বিল্লাহ ",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/2023/masum.jpg",
    },
    {
      name: "মোঃ মনিরুল ইসলাম সজীব",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/2023/monirul.jpg",
    },
    {
      name: "জুবায়ের মুন্সী",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/2023/jubayer.jpg",
    },
    {
      name: "মামশুকা ফারহাত",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/2023/mumsuka.jpg",
    },
    {
      name: "লামিয়া ইসলাম মীম",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/2023/mim.jpg",
    },
    {
      name: "সৈয়দ সাদমান ইসলাম",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/2023/sadman.jpg",
    },

    {
      name: "সিবগাত উল্লাহ্‌ খান",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/2023/boy.jpg",
    },
    {
      name: "ফাতেমা হাসান মেহজাবিন",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/2023/girl.jpg",
    },

    {
      name: "প্রান্ত ঘোষ",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/2023/boy.jpg",
    },
    {
      name: "নোশিন তাবাসসুম তাহেরি",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/2023/girl.jpg",
    },
    {
      name: "জারিন সুবা",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/2023/girl.jpg",
    },

    {
      name: "উম্মে সালমা আলফি",
      designation: "কার্যনির্বাহী সদস্য",
      image: "members/2023/girl.jpg",
    },
  ];

  const executiveMembersByYearMap = {
    2025: executiveMembersIn2025,
    2024: executiveMembersIn2024,
    2023: executiveMembersIn2023,
  };

  return executiveMembersByYearMap[year];
};

export default ExecutiveMembersService;
