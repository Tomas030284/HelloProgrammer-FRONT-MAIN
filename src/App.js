/* import './App.css';
import './index.scss';
import Services from './sections/Services';
import Navbar from './sections/Navbar';
import AboutUs from './sections/AboutUs';
import Products from './sections/Products';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutUs/>
      <Products/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App; */

import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Section5 from "./Components/Section5/Section5";

function App() {
  return (
    <div className="container-fluid">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default App;
