import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './page/dashboard/dashboard';
import Detail from './page/detail/detail';
import Navbarr from './components/navbar/navbar';

function App() {
  return (
    <>
      <Router>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="detail/:id" element={<Detail />} />
          {/* <Route path="*" element={<Pagenotfound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
