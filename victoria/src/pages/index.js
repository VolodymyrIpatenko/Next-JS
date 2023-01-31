import Home from '../components/Home/Home';
import coachList from '../components/Home/coachData.json';

export default function HomeApp() {
  return <Home coachData={coachList} />;
}
