import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './page/dashboard/dashboard';
import Detail from './page/detail/detail';
import Navbarr from './components/navbar/navbar';
import Series from './page/series/series';
import Trending from './page/trending/trending';
import Upcoming from './page/upcoming/upcoming';
import FooterA from './components/footer/footer';

function App() {
  return (
    <>
      <Router>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="/series" element={<Series />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/upcoming" element={<Upcoming />} />
          {/* <Route path="*" element={<Pagenotfound />} /> */}
        </Routes>
        <FooterA />
      </Router>
    </>
  );
}

export default App;
