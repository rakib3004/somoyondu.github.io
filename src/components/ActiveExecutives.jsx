import ExecutiveMembers from "./Executives/ExecutiveMembers";
import OfficialExecutives from "./Executives/OfficialExecutives";
import OrganizingExecutives from "./Executives/OrganizingExecutives";
import TopExecutives from "./Executives/TopExecutives";
const ActiveExecutives = ({ selectedId, year }) => {
  return (
    <div>
      {selectedId === "members" && <ExecutiveMembers year={year}/>}
      {selectedId === "official" && <OfficialExecutives year={year}/>}
      {selectedId === "organizing" && <OrganizingExecutives year={year}/>}
      {selectedId === "top-executives" && <TopExecutives year={year}/>}
    </div>
  );
};

export default ActiveExecutives;
