import logo from './logo.svg';
import './App.css';
import Navbarr from './components/navbar/navbar';

function App() {
  return (
    <>
      <Navbarr />
      <div className="App-body">
        <div className="header ">
          <h1 className="">Explore</h1>
          <div className="text-sm text-gray-500">What are you gonna watch today?</div>
        </div>
      </div>
    </>
  );
}

export default App;
