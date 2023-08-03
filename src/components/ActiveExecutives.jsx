import React from 'react'
import ExecutiveMembers from './Executives/ExecutiveMembers';
import LeadExecutives from './Executives/LeadExecutives';
import OfficialExecutives from './Executives/OfficialExecutives';
import OrganizingExecutives from './Executives/OrganizingExecutives';
import TopLeaders from './Executives/TopLeaders';
const ActiveExecutives = ({ selectedTitle }) => {
    let selectedComponent = <TopLeaders /> ;
  
    if (selectedTitle === "members") {
      selectedComponent = <ExecutiveMembers />;
    } else if (selectedTitle === "official") {
      selectedComponent = <OfficialExecutives />;
    } else if (selectedTitle === "top-members") {
      selectedComponent = <LeadExecutives />;
    } else if (selectedTitle === "organizing") {
      selectedComponent = <OrganizingExecutives />;
    } else if (selectedTitle === "top-leaders"){
      selectedComponent = <TopLeaders />;
    }
  
    return <div>{selectedComponent}</div>;
  };
  

export default ActiveExecutives