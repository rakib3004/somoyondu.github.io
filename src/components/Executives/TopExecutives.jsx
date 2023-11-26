import ExecutiveCard from "../ExecutiveCard";
import TopExecutivesService from '../../services/TopExecutivesService';

const TopExecutives = () => {
  const topExecutives = TopExecutivesService();
  return (
    <div className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
      {topExecutives.map((topExecutive) => (
        <ExecutiveCard key={topExecutive.name} executive={topExecutive} />
      ))}
    </div>
  );
};

export default TopExecutives;
