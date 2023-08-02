import React, { useState } from 'react'
import ExecutiveMembers from './Executives/ExecutiveMembers';
import LeadExecutives from './Executives/LeadExecutives';
import OfficialExecutives from './Executives/OfficialExecutives';
import OrganizingExecutives from './Executives/OrganizingExecutives';

const AllExecutive = () => {
    const [active, setActive] = useState('');

    const navLinks = [
        {
            id: "top-leaders",
            title: "ঊর্ধ্বতন নেতাবৃন্দ",
        },
        {
            id: "top-members",
            title: "ঊর্ধ্বতন সদস্য",
        },
        {
            id: "organizing",
            title: "সাংগঠনিক সম্পাদক",
        },
        {
            id: "official",
            title: "দাপ্তরিক সদস্য",
        },
        {
            id: "members",
            title: "কার্যনির্বাহী সদস",
        },
    ];
    return (
        <div>


            <nav className={`w-full flex items-center absolute top-0 z-20 bg-primary`}>

                <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

                    <ul className='list-none hidden sm:flex flex-row gap-10'>
                        {navLinks.map((link) => (
                            <li key={link.id}

                                className={`${active === link.title ? "text-white" : "text-[#1D0061]"}
     hover:text-white text-[18px] font-bold cursor-pointer`}
                                onClick={() => setActive(link.title)}
                            >
                                <a href={`#${link.id}`}> {link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <ExecutiveMembers />
            <LeadExecutives />
            <OfficialExecutives />
            <OrganizingExecutives />
        </div>
    )
}

export default AllExecutive