import React, { useState } from 'react'

import ActiveExecutives from './ActiveExecutives';

const AllExecutives = () => {
    const [active, setActive] = useState('top-leaders');
 
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
            title: "কার্যনির্বাহী সদস্য",
        },
    ];
    return (
        <div>

            <nav className={`w-full flex items-center top-0 z-20 bg-primary`}>

                <div className='w-full flex justify-between items-center max-w-7xl mx-56'>

                    <ul className='list-none hidden sm:flex flex-row gap-10'>
                        {navLinks.map((link) => (
                            <li key={link.id}
                                className={`${active === link.title ? "border-b-4 border-red-500" : ""}
                                text-[#1D0061] text-[18px] font-bold cursor-pointer`}
                                onClick={() => setActive(link.title)}
                            >
                                <a href={`#${link.id}`}> {link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <ActiveExecutives selectedTitle={active}/>
           
        </div>
    )
}

export default AllExecutives