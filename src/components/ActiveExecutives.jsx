import React from "react";
import ExecutiveMembers from "./Executives/ExecutiveMembers";
import LeadExecutives from "./Executives/LeadExecutives";
import OfficialExecutives from "./Executives/OfficialExecutives";
import OrganizingExecutives from "./Executives/OrganizingExecutives";
import TopLeaders from "./Executives/TopLeaders";
const ActiveExecutives = ({ selectedId }) => {
  return (
    <div>
      {selectedId === "top-leaders" && <TopLeaders />}
      {selectedId === "members" && <ExecutiveMembers />}
      {selectedId === "official" && <OfficialExecutives />}
      {selectedId === "organizing" && <OrganizingExecutives />}
      {selectedId === "top-members" && <LeadExecutives />}
    </div>
  );
};

export default ActiveExecutives;
