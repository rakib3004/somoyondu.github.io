
import FoundingLeaders from '../components/Executives/FoundingLeaders';

const FoundingMembers = () => {
    return (
      <div className='py-6 my-6' id="executives">
        <div className='text-center'>
        <h1 className='text-2xl lg:text-3xl text-center font-bold pb-4 text-[#1D0061]'>প্রতিষ্ঠাতা সদস্যগণ</h1>
        <h1 className='text-md'>
        শিক্ষা, ঐক্য এবং ভ্রাতৃত্ব এই তিনটি স্লোগানকে সামনে রেখে আমাদের এই অগ্রযাত্রা। এই যাত্রাকে ত্বরান্বিত করতে ২০২৩ সালে <br />
        প্রতিষ্ঠাতা সদস্যদের বহুদিনের লালিত স্বপ্ন বাস্তবায়নে প্রতিষ্ঠিত হয় সময়ন।
         </h1>
        </div>
        <div className='my-6'>
        </div>
       <FoundingLeaders/>
      </div>
    )
}

export default FoundingMembers