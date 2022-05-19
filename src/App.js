
import { useState } from 'react';
import About from './compunents/About';
import Navbar from './compunents/Navbar';
import TextForm from './compunents/TextForm';
import Alert from './compunents/Alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
      // document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert(' Light mode enabled', 'success')
      // document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" homeText="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils-word counter,charcter,remove extra spaces " mode={mode} my-2 />}></Route>
            {/* <Navbar/> */}
            {/* <div className="container my-3"> */}
            {/* <TextForm showAlert = {showAlert} heading="Enetr Your text" mode={mode} /> */}
            {/* <About mode = {mode}/> */}
            {/* </div> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
