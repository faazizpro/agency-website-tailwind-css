import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Team from './components/Team/Team';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <div>
         <Header></Header>
         <Hero></Hero>
         <Service></Service>
         <About></About>
         <Team></Team>
         <Portfolio></Portfolio>
         <FAQ></FAQ>
    </div>
  );
}

export default App;
