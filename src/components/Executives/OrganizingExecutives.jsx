import React from "react";
import ExecutiveCard from "../ExecutiveCard";
import OrganizingExecutivesService from '../../services/OrganizingExecutivesService';

const OrganizingExecutives = () => {
  const organizingExecutives = OrganizingExecutivesService();
  return (
    <div className="mx-6 lg:mx-20 mt-5 lg:mt-10 grid gap-1 lg:gap-4 grid-cols-2 lg:grid-cols-4">
      {organizingExecutives.map((organizingExecutive) => (
        <ExecutiveCard
          key={organizingExecutive.name}
          executive={organizingExecutive}
        />
      ))}
    </div>
  );
};

export default OrganizingExecutives;
