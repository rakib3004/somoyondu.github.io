import { useState } from "react";
import AllExecutives from "../components/AllExecutives";
import TopLeaders from "../components/Executives/TopLeaders";
import ViewMoreOrLessButton from "../components/ViewMoreOrLessButton";

const ExecutiveCommittee = ({ executiveCommitteeInfo }) => {
  const [isDetails, setIsDetails] = useState(false);
  return (
    <div className="py-2 my-6" id="executives">
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl text-center font-bold text-[#1D0061]">
          {executiveCommitteeInfo.title}
        </h1>
      </div>
      <TopLeaders year={executiveCommitteeInfo.year}/>

      {!isDetails ? (
        <ViewMoreOrLessButton
          isDetails={isDetails}
          setIsDetails={setIsDetails}
          buttonText={executiveCommitteeInfo.expandButtonText}
        />
      ) : (
        <div>
          <div className="m-10"></div>
          <AllExecutives year={executiveCommitteeInfo.year}/>
          <ViewMoreOrLessButton
            isDetails={isDetails}
            setIsDetails={setIsDetails}
            buttonText={executiveCommitteeInfo.collapseButtonText}
          />
        </div>
      )}
    </div>
  );
};

export default ExecutiveCommittee;
