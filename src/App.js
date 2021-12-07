import logo from './logo.svg';
import './scss/app.scss';
import {Navbar} from './components/navbar/Navbar'
import { Newcollection } from './components/newcollection/Newcollection';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';


function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer placeholder={"Product Holder In Progress."}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My first React Project
        </p>

        <br />
        <p>E-commerce in progress.</p>
      </header>
      <Newcollection />
    </div>
  );
}

export default App;
