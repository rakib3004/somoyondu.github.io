import Gallery from '../features/Gallery'
import AdvisoryCommittee from '../features/AdvisoryCommittee'
import FoundingMembers from '../features/FoundingMembers'
import ExecutiveCommitteeSection from './ExecutiveCommitteeSection'

const MainSection = () => {
  return (
    <div>
    <Gallery/>
    <FoundingMembers/>
    <ExecutiveCommitteeSection/>
    <AdvisoryCommittee/>
    </div>
  )
}

export default MainSection