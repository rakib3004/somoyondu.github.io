import React, { useState } from 'react'

const ViewMoreButton = ({ isDetails, setIsDetails }) => {
    const [buttonName, setButtonName] = useState("আরও দেখুন");
    const showMore = () => {
        setIsDetails(!isDetails);

    }
    return (
        <button className='bg-[#1D0061] text-white px-6 lg:px-10 py-2 lg:py-4 rounded-md ml-20 lg:ml-0 lg:-left-16' onClick={showMore}>
            আরও দেখুন  </button >

    )
}

export default ViewMoreButton