import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Globals/styles.css';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function MainRoutes() {
  return (
    <Router>
      <div className='Routes'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MainRoutes;
