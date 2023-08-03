import React from "react";
import ExecutiveMembers from "./Executives/ExecutiveMembers";
import OfficialExecutives from "./Executives/OfficialExecutives";
import OrganizingExecutives from "./Executives/OrganizingExecutives";
import TopExecutives from "./Executives/TopExecutives";
import TopLeaders from "./Executives/TopLeaders";
const ActiveExecutives = ({ selectedId }) => {
  return (
    <div>
      {selectedId === "top-leaders" && <TopLeaders />}
      {selectedId === "members" && <ExecutiveMembers />}
      {selectedId === "official" && <OfficialExecutives />}
      {selectedId === "organizing" && <OrganizingExecutives />}
      {selectedId === "top-executives" && <TopExecutives />}
    </div>
  );
};

export default ActiveExecutives;
