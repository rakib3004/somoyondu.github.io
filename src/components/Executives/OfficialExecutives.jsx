import ExecutiveCard from "../ExecutiveCard";
import OfficialsService from '../../services/OfficialsService';

const OfficialExecutives = () => {
  const officialExecutives = OfficialsService();
  return (
    <div className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
      {officialExecutives.map((officialExecutive) => (
        <ExecutiveCard
          key={officialExecutive.name}
          executive={officialExecutive}
        />
      ))}
    </div>
  );
};

export default OfficialExecutives;
