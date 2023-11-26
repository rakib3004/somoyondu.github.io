import ExecutiveCard from "../ExecutiveCard";
import FoundingMembersService from '../../services/FoundingMembersService';

const FoundingLeaders = () => {
    const foundingLeaders = FoundingMembersService();

  return (
    <div className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
    {foundingLeaders.map((foundingLeader) => (
      <ExecutiveCard key={foundingLeader.name} executive={foundingLeader} />
    ))}
  </div>  )
}

export default FoundingLeaders;