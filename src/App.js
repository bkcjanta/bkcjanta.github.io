import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import {Navbar} from './components/Navbar';
import {useColorMode,Button} from "@chakra-ui/react"
import { Skills } from './components/Skills';
import { Projetcs } from './components/Projects';
import { Contact } from './components/Contact';
function App() {
  return (
    <div className="App">
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
