import './scss/app.scss';
import './grid-system/bootstrap-grid.min.css'
import {Navbar} from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer';
import { Newcollection } from './components/newcollection/Newcollection';
import { HomeText } from './components/hometext/HomeText';
import { Slider } from './components/slider/Slider';
/* import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer'; */
import { CardContainer } from './components/cards/CardContainer';
/* import { ProductPage } from './components/productpage/ProductPage'; */
/* import { AboutUs } from './components/aboutus/AboutUs'; */

function App() {  

  return (
    <div className="App">
      <Navbar />
      {/* <AboutUs/> */}
      {/* <ItemListContainer /> */}
      <Slider />
      <CardContainer />      
      <Newcollection />
      <HomeText/>
      <Footer />
      {/* <ProductPage /> */}
    </div>
  );
}

export default App;