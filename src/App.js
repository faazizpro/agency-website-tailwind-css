import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div>
         <Header></Header>
         <Hero></Hero>
         <Service></Service>
         <About></About>
         <Portfolio></Portfolio>
    </div>
  );
}

export default App;
