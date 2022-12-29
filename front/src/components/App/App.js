
import './App.scss';
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Spots from '../Spots/Spots';
import Materials from '../Materials/Materials';
import Header from '../Header/Header';
import Map from '../Map/Map'


function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Spots/>
      <Materials/>
      <Map/>
      <Contact/>
    </div>
  );
}

export default App;
