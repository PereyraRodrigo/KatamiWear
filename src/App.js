import './scss/app.scss';
import {Navbar} from './components/navbar/Navbar'
import { Newcollection } from './components/newcollection/Newcollection';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';

function App() {


  return (
    <div className="App">
      <Navbar />
      <ItemListContainer placeholder={"Product Holder In Progress."} />
      <Newcollection />
    </div>
  );
}

export default App;
