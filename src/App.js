// HOOKS
import { HashRouter, Routes, Route } from 'react-router-dom';

// STYLE
import './App.scss';

// COMPONENTS
import LandingPage from './pages/LandingPage/LandingPage'
import TaranakiApp from './pages/TaranakiApp/TaranakiApp';
import CropCircle from './pages/CropCircle/CropCircle';
import Resume from './pages/Resume/Resume';
import NataChocolate from './pages/NataChocolates/NataChocolate';
import BookVibe from './pages/BookVibe/BookVibe';
import About from './section/About/About';
import Projects from './section/Projects/Projects';
import Contact from './section/Contact/Contact';



function App() {
  return (
    <div className="App">
      <HashRouter >
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/cropcircle' element={<CropCircle />} />
          <Route path='/taranakiapp' element={<TaranakiApp />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/natachocolate' element={<NataChocolate />} />
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
