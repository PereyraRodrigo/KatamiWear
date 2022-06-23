import './scss/app.scss';
import {Navbar} from './components/navbar/Navbar'
import { Newcollection } from './components/newcollection/Newcollection';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';
import { HomeText } from './components/hometext/HomeText';

function App() {  

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <Newcollection />
      <HomeText/>
    </div>
  );
}

export default App;
