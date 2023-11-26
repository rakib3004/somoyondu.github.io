import { useState } from 'react';
import DonationModal from '../features/DonationModal';

const FooterTitle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDonationModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
          {isOpen && <DonationModal isOpen={isOpen} setIsOpen={setIsOpen} />}

      <h1 className='text-3xl text-gray-400 font-bold'>প্রয়োজনে পাশে থাকুন</h1>
      <h1 className='text-xl text-white font-bold mb-20' onClick={openDonationModal}><u>আজই দান করুন </u></h1>
    </div>
  )
}

export default FooterTitle