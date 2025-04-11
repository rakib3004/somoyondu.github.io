import React from 'react'
import ExecutiveCommittee from '../features/ExecutiveCommittee'

const ExecutiveCommitteeSection = () => {
  const executiveCommitteeIn2025 = {
    title: 'কার্যনির্বাহী পরিষদ ২০২৫',
    expandButtonText: '২০২৫ এর পূর্ণাঙ্গ কার্যনির্বাহী পরিষদ দেখুন',
    collapseButtonText: '২০২৫ এর সংক্ষিপ্ত কমিটি দেখুন',
    year: 2025
  };
  const executiveCommitteeIn2024 = {
    title: 'কার্যনির্বাহী পরিষদ ২০২৪',
    expandButtonText: '২০২৪ এর পূর্ণাঙ্গ কার্যনির্বাহী পরিষদ দেখুন',
    collapseButtonText: '২০২৪ এর সংক্ষিপ্ত কমিটি দেখুন',
    year: 2024
  };
  const executiveCommitteeIn2023 = {
    title: 'কার্যনির্বাহী পরিষদ ২০২৩',
    expandButtonText: '২০২৩ এর পূর্ণাঙ্গ কার্যনির্বাহী পরিষদ দেখুন',
    collapseButtonText: '২০২৩ এর সংক্ষিপ্ত কমিটি দেখুন',
    year: 2023
  };
  const executiveCommitteeByYearMap = {
    2025: executiveCommitteeIn2025,
    2024: executiveCommitteeIn2024,
    2023: executiveCommitteeIn2023,
  };

  return (
    <div>
      <ExecutiveCommittee
        executiveCommitteeInfo={executiveCommitteeByYearMap[2025]}
      />
      <ExecutiveCommittee
        executiveCommitteeInfo={executiveCommitteeByYearMap[2024]}
      />
      <ExecutiveCommittee
        executiveCommitteeInfo={executiveCommitteeByYearMap[2023]}
      />
      </div>
  );
}

export default ExecutiveCommitteeSection