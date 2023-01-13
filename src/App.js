import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import {Navbar} from './components/Navbar';
import { Skills } from './components/Skills';
import { Projetcs } from './components/Projects';
import { Contact } from './components/Contact';
import bg from "./assets/bg1.gif"
import { GitStatus } from './components/GitStatus';

function App() {
  const style={
    backgroundImage: `url(/assets/bg1.gif)`,
   
  
  }
  return (
    <div  className="App" style={style}>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projetcs/>
      <GitStatus/>
      <Contact/>

     
    </div>
  );
}

export default App;
