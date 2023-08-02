import React from 'react'
import ExecutiveMembers from './Executives/ExecutiveMembers';
import LeadExecutives from './Executives/LeadExecutives';
import OfficialExecutives from './Executives/OfficialExecutives';
import OrganizingExecutives from './Executives/OrganizingExecutives';

const ExecutiveCommitte = () => {
    return (
        <div>
            <ExecutiveMembers />
            <LeadExecutives />
            <OfficialExecutives />
            <OrganizingExecutives />
        </div>
    )
}

export default ExecutiveCommitte