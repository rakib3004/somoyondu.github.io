const ViewMoreOrLessButton = ({ isDetails, setIsDetails, buttonText }) => {
  const showMoreOrLess = () => {
    setIsDetails(!isDetails);
  };
  return (
    <button
      className="bg-[#1D0061] text-white px-6 lg:px-10 py-2 lg:py-4 rounded-md ml-2 lg:ml-20 lg:-left-16"
      onClick={showMoreOrLess}
    >
      {buttonText}
    </button>
  );
};

export default ViewMoreOrLessButton;
