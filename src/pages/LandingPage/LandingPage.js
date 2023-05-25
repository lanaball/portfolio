// COMPONENTS
import AsideBar from '../../components/AsideBar/AsideBar';
import Navbar from '../../components/Navbar/Navbar';


// SECTIONS IN PAGES
import Header from '../../section/Header/Header';
import About from '../../section/About/About';
import Skills from '../../section/Skills/Skills'
import Footer from '../../section/Footer/Footer';
import Projects from '../../section/Projects/Projects';

export default function LandingPage() {

    return (
        <>
    <AsideBar />
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Skills />
            <Footer />
            </>
    )
}