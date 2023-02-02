import Home from '../components/home/Home';
import coachList from '../components/home/coachData.json';

export default function HomeApp() {
  return <Home coachData={coachList} />;
}
