// HOOKS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// STYLE
import './App.scss';

// COMPONENTS
import LandingPage from './pages/LandingPage/LandingPage'
import TaranakiApp from './pages/TaranakiApp/TaranakiApp';
import CropCircle from './pages/CropCircle/CropCircle';
import Resume from './pages/Resume/Resume';
import NataChocolate from './pages/NataChocolates/NataChocolate';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes> 
        <Route path='/' element={ <LandingPage />} />
          <Route path='/cropcircle' element={<CropCircle />} /> 
          <Route path='/taranakiapp' element={ <TaranakiApp /> } /> 
          <Route path='/resume' element={<Resume />} />
          <Route path='/natachocolate' element={ <NataChocolate /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
