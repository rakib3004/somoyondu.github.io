import Gallery from '../features/Gallery'
import AdvisoryCommittee from '../features/AdvisoryCommittee'
import FoundingMembers from '../features/FoundingMembers'
import ExecutiveCommitteeSection from './ExecutiveCommitteeSection'
import Events from '../features/Events'

const MainSection = () => {
  return (
    <div>
    <Gallery/>
    <FoundingMembers/>
    <ExecutiveCommitteeSection/>
    <AdvisoryCommittee/>
    {/* <Events/> */}
    </div>
  )
}

export default MainSection