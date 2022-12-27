import './App.css';
import Navbar from './components/Navbar';
import {useColorMode,Button} from "@chakra-ui/react"
function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
