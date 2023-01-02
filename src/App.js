import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import {Navbar} from './components/Navbar';
import {useColorMode,Button, useColorModeValue} from "@chakra-ui/react"
import { Skills } from './components/Skills';
import { Projetcs } from './components/Projects';
import { Contact } from './components/Contact';
import bg from "./assets/bg1.gif"

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
      <Contact/>

     
    </div>
  );
}

export default App;
