import ExecutiveCard from "../ExecutiveCard";
import TopLeadersService from '../../services/TopLeadersService';

const TopLeaders = () => {
  const topLeaders = TopLeadersService();
  return (
    <div className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
      {topLeaders.map((topLeader) => (
        <ExecutiveCard key={topLeader.name} executive={topLeader} />
      ))}
    </div>
  );
};

export default TopLeaders;
