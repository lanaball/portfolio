// HOOKS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// STYLE
import './App.scss';

// COMPONENTS
import LandingPage from './pages/LandingPage/LandingPage'
import TaranakiApp from './pages/TaranakiApp/TaranakiApp';
import CropCircle from './pages/CropCircle/CropCircle';
import WordPress from './pages/WordPress/WordPress';
import Resume from './pages/Resume/Resume';

// import Resume from './pages/Resume/Resume'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes> 
        <Route path='/' element={ <LandingPage />} />
          <Route path='/cropcircle' element={<CropCircle />} /> 
          <Route path='/wordpress' element={<WordPress />} /> 
          <Route path='/taranakiapp' element={ <TaranakiApp /> } /> 
          <Route path='/resume' element={ <Resume /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
