import './App.scss';
import AsideBar from './components/AsideBar/AsideBar';
import Navbar from './components/Navbar/Navbar';
import Header from './section/Header/Header';
import About from './section/About/About';
import Skills from './section/Skills/Skills'
import Footer from './section/Footer/Footer';
import Projects from './section/Projects/Projects'




function App() {
  return (
    <div className="App">
      <AsideBar />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
