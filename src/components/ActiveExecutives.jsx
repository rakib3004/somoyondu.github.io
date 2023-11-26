
import ExecutiveMembers from "./Executives/ExecutiveMembers";
import OfficialExecutives from "./Executives/OfficialExecutives";
import OrganizingExecutives from "./Executives/OrganizingExecutives";
import TopExecutives from "./Executives/TopExecutives";
const ActiveExecutives = ({ selectedId }) => {
  return (
    <div>
      {selectedId === "members" && <ExecutiveMembers />}
      {selectedId === "official" && <OfficialExecutives />}
      {selectedId === "organizing" && <OrganizingExecutives />}
      {selectedId === "top-executives" && <TopExecutives />}
    </div>
  );
};

export default ActiveExecutives;
