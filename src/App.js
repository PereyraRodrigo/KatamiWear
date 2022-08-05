import './scss/app.scss';
import './grid-system/bootstrap-grid.min.css'
import {Navbar} from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer';
import { Newcollection } from './components/newcollection/Newcollection';
import { Slider } from './components/slider/Slider';
import { CardContainer } from './components/cards/CardContainer'; 
import { HomeText } from './components/hometext/HomeText';
import { ItemDetailContainer } from './components/itemdetail/itemDetailContainer';
/* import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer'; */
/* import { AboutUs } from './components/aboutus/AboutUs'; */

function App() {  

  return (
    <div className="App">
      <Navbar />
      <Slider />
      <CardContainer />      
      <ItemDetailContainer />
      <HomeText/>
      <Newcollection />
      <Footer />
      {/* <AboutUs/> */}
      {/* <ItemListContainer /> */}
    </div>
  );
}

export default App;