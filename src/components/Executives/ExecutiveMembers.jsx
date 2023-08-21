import React from "react";
import ExecutiveCard from "../ExecutiveCard";
import ExecutiveMembersService from '../../services/ExecutiveMembersService';

const ExecutiveMembers = () => {
  const executiveMembers = ExecutiveMembersService();

  return (
    <div className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
      {executiveMembers.map((executiveMember) => (
        <ExecutiveCard key={executiveMember.name} executive={executiveMember} />
      ))}
    </div>
  );
};

export default ExecutiveMembers;
