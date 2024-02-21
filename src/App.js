import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'


function App() {

const [mode, setMode] = useState('light');
const toggleMode = () => {
  if(mode === 'light') {
    document.body.style.backgroundColor = '#005a8e';
    setMode('dark');
  }
  else {
    document.body.style.backgroundColor = 'white';
    setMode('light');
  }
}

const [MyStyle, setMyStyle] = useState({
  color: 'black',
  backgroundColor: 'white'
})


  return (
 <>
 <Navbar mode={mode} toggleMode={toggleMode}/>
 <TextForm mode={mode}/>
 </>
  );
}

export default App;
