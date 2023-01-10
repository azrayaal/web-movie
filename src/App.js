import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './page/dashboard/dashboard';
import Detail from './page/detail/detail';

function App() {
  return (
    <>
      <Router>
        {/* <div className="App"> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<Detail />} />
          {/* <Route path="*" element={<Pagenotfound />} /> */}
        </Routes>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
