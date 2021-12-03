import logo from './logo.svg';
import './scss/app.scss';
import {Navbar} from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My first React Project
        </p>
        <br/>
        <p>E-commerce in progress.</p>
      </header>
    </div>
  );
}

export default App;
