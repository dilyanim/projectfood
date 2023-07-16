import './App.css';
import Header from './compponents/Header'
import Hero from './compponents/Hero'
import Choose from './compponents/Choose'
import About from './compponents/About'
import Fresh from './compponents/Fresh'
import Chefs from './compponents/Chefs'
import Dish from './compponents/Dish'
import Clients from './compponents/Clients'
import Subscribe from './compponents/Subscribe'
import Footer from './compponents/Footer'
import Line from './compponents/Line';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Choose/>
      <About/>
      <Fresh/>
      <Chefs/>
      <Dish/>
      <Clients/>
      <Subscribe/>
      <Footer/>
      <Line/>
    </div>
  );
}

export default App;
