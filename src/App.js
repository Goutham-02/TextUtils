
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
import React, { useState } from "react";
import { Routes, Route } from "react-router";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212A3E';
      showAlert("Dark Mode is enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
    }
  }

  return (
    <>

      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" index element={<Textforms showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Textforms showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />
            </Route> */}
      </div>
    </>
  );
}

export default App;
