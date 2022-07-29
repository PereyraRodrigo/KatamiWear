import './scss/app.scss';
import './grid-system/bootstrap-grid.min.css'
import {Navbar} from './components/navbar/Navbar'
import { Newcollection } from './components/newcollection/Newcollection';
/* import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer'; */
import { HomeText } from './components/hometext/HomeText';
import { Slider } from './components/slider/Slider';
/* import { AboutUs } from './components/aboutus/AboutUs'; */

function App() {  

  return (
    <div className="App">
      <Navbar />
      {/* <AboutUs/> */}
      <Slider />
      {/* <ItemListContainer greeting='Hola! desafio coder "Crea tu landing" ' /> */}
      <Newcollection />
      <HomeText/>
    </div>
  );
}

export default App;
