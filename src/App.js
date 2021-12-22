import './scss/app.scss';
import {Navbar} from './components/navbar/Navbar'
import { Newcollection } from './components/newcollection/Newcollection';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';
/* import { useEffect, useState } from 'react'; */

function App() {

  /* const [loading, setLoading] = useState(true)
  useEffect(() => {
    
  }, []); */

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <Newcollection />

      {/* {loading && <h1>Loading...</h1> } */}
    </div>
  );
}

export default App;
