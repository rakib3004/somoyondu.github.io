import Gallery from '../features/Gallery'
import ExecutiveComittee from '../features/ExecutiveComittee'
import AdvisoryComittee from '../features/AdvisoryComittee'
import FoundingMembers from '../features/FoundingMembers'

const MainSection = () => {
  return (
    <div>
    <Gallery/>
    <FoundingMembers/>
    <ExecutiveComittee/>
    <AdvisoryComittee/>
    </div>
  )
}

export default MainSection