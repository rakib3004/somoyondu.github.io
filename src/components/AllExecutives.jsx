import  { useState } from 'react';

import ActiveExecutives from './ActiveExecutives';

const AllExecutives = () => {
    const [title, setTitle] = useState('ঊর্ধ্বতন সদস্য');
    const [id, setId] = useState('top-executives');

    // const setAttributes = ({link}) =>{
    //     setTitle(link.title);
    //     setId(link.id);
    // }

    const navLinks = [
     
        {
            id: "top-executives",
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

            <nav className={`w-full flex items-center top-0 bg-primary`}>

                <div className='w-full flex justify-between items-center max-w-7xl ml-12 lg:ml-96'>

                    <ul className='list-none flex flex-row gap-2 lg:gap-8'>
                        {navLinks.map((link) => (
                            <li key={link.id}
                                className={`${title === link.title ? "border-b-2 lg:border-b-4 border-red-500" : ""}
                                text-[#1D0061] text-[14px] lg:text-[18px] font-bold cursor-pointer`}
                                onClick={() =>  {setTitle(link.title); setId(link.id); }}
                            >
                                <a href={`#${link.id}`}> {link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <ActiveExecutives selectedId={id}/>
           
        </div>
    )
}

export default AllExecutives