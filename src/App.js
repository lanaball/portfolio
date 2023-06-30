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
        </Routes>
      </HashRouter >
    </div>
  );
}

export default App;
