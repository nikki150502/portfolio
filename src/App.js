 
import './App.css';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { Work } from './Components/work/Work';

function App() {
  return (
     <>
     <Navbar/>
     <Hero/>
      <About/>
      <Work/>
       <Contact/>
       <Footer/>
     </>
  );
}

export default App;
