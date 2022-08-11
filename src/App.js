import './scss/app.scss';
import './grid-system/bootstrap-grid.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer';
import { CardContainer } from './components/cards/CardContainer';
import { ItemDetail } from './components/itemdetail/ItemDetail';
import { Home } from './pages/home/Home';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';
import { YourBag } from './pages/yourbag/YourBag';
import { Checkout } from './pages/checkout/Checkout';
import { AboutUs } from './components/aboutus/AboutUs';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Women' element={<CardContainer />} />
        <Route path='/Women/:productId' element={<ItemDetail />} />
        <Route path='/Men' element={<ItemListContainer />} />
        <Route path='/About' element={<AboutUs/>} />
        <Route path='/Bag' element={<YourBag/>} />
        <Route path='/Checkout' element={<Checkout />} />
        {/* <CardContainer />
        <ItemDetailContainer /> */}        
        {/* <ItemListContainer /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;