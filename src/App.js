// HOOKS
import { HashRouter, Routes, Route } from 'react-router-dom';

// STYLE
import './App.scss';

// COMPONENTS
import LandingPage from './pages/LandingPage/LandingPage'
import Nicole from './pages/Nicole/Nicole';
import CropCircle from './pages/CropCircle/CropCircle';
import Cannons from './pages/Cannons/Cannons';
import Resume from './pages/Resume/Resume';
import BookVibe from './pages/BookVibe/BookVibe';
import About from './section/About/About';
import Projects from './section/Projects/Projects';
import Contact from './section/Contact/Contact';
import NataChocolate from './pages/NataChocolates/NataChocolate';



function App() {
  return (
    <div className="App">
      <HashRouter >
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/cropcircle' element={<CropCircle />} />
          <Route path='/nicole' element={<Nicole />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/natachocolate' element={<NataChocolate />} />
          <Route path='/cannons' element={<Cannons />} />
          <Route path='/bookvibe' element={<BookVibe />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </HashRouter >
    </div>
  );
}

export default App;
