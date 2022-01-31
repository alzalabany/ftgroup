import ScrollSpy from "react-ui-scrollspy";
import './App.css';
import Contact from './C/Contact';
import Footer from './C/Footer';
import Hero from './C/Hero';
import Info from './C/Info';
import Nav from './C/Nav';
import Process from './C/Process';
import Solutions from './C/Solutions';

function App() {
  return (
    <ScrollSpy>
      <Nav />
      <Hero />
      <Info />
      <Solutions />
      <Process />
      <Contact />
      <Footer />
    </ScrollSpy>
  );
}

export default App;
