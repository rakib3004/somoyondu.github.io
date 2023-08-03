import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import DonationCard from '../components/Donation/DonationCard';

 const DonationModal = ({isOpen, setIsOpen}) => {

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
   
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-14 m-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-4xl text-center font-medium leading-6 text-gray-900"
                  >
                    দান
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-md text-black text-extrabold py-9 text-center ">
                    বিভিন্ন সামাজিক কার্যক্রমে সময়ন সার্বক্ষণিক নিয়জিত আছে।
                     আপনার অনুদান আমরা পৌঁছে দিবো দুঃস্থদের কাছে
                     সমাজকল্যাণমূলক বিভিন্ন কাজে নিয়জিত থাকুন সময়নের মাধ্যমে।
                    </p>
                  </div>
                  <DonationCard/>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      ধন্যবাদ 
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default DonationModal;