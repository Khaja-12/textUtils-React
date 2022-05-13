
import { useState } from 'react';
import './App.css';
import About from './compunents/About';
import Navbar from './compunents/Navbar';
import TextForm from './compunents/TextForm';
import Alert from './compunents/Alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert(' Dark mode enabled', 'success')
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert(' Light mode enabled', 'success')
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    {/* {<Navbar title="TextUtils" aboutText="About TextUtils" />} */}
    {/* <Navbar/> */}
    <Router>
        <Navbar title="TextUtils"  homeText = "Home" aboutText = "About"   mode={mode} toggleMode={toggleMode} />s
        <Alert alert={alert} />
        {/* <Navbar/> */}
        <div className="container" >
          <Routes>
            {/* { users ----> component 1
                  users/home -----> componentn 2} */}
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
    </Router>
        </>
  );
}

export default App;
